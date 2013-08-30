var request = require('request');

var LinkedInApi = module.exports = {};

var _BasicProfileFields = "id,first-name,last-name,headline,location:(name),industry,distance,relation-to-viewer:(related-connections),num-connections,num-connections-capped,summary,specialties,positions,picture-url,picture-urls::(original),site-standard-profile-request,public-profile-url";

var _FullProfileFields = "last-modified-timestamp,associations,interests,publications:(title,publisher,authors:(name),summary,url),patents:(title,summary,inventors:(name),url),languages:(language:(name),proficiency:(level)),skills:(skill:(name)),certifications:(name),educations:(school-name,field-of-study,degree,activities,notes),courses:(name),volunteer:(volunteerExperiences:(role,organization)),three-current-positions,three-past-positions,num-recommenders,recommendations-received:(recommendation-type,recommendation-text,recommender),mfeed-rss-url,job-bookmarks,date-of-birth,member-url-resources,related-profile-views,connections:(id),group-memberships,network";

// skills:(???)

var _ContactInfoFields = "email-address,phone-numbers,im-accounts,main-address,twitter-accounts";

var _AllFields = _BasicProfileFields + "," + _FullProfileFields + "," + _ContactInfoFields;

var _PeopleSearchReturnFields = "(people:(" + _AllFields + "),facets:(code,name,buckets:(code,name,count)))";


// GET /people/search
// call _searchConnections to return paginated array of connections that match the query criteria
// First api call must be synchronous to get total available results
//      total result number is compared to max to makes sure no unnecessary api calls are used when there are no remaining pages to fetch
//      subsequent api calls for remaining pages can happen concurrently / asynchronously
// Number of connections capped by max, which is defaulted to 50 to avoid accidentially exceeding throttle limit
LinkedInApi.searchConnections = function (session, query, max) {
  var deferred = Q.defer();
  var promises = [];
  max = max || 100;
  query.start = query.start || 0;
  query.count = query.count || 25;

  var output = LinkedInApi._searchConnections(session, query);
  promises.push(output);
  output.then(
      function(data){
        if (typeof data === 'string'){
          data = JSON.parse(data);
        }
        max = Math.min(max, data.people._total);
        for(var i = query.count; i < max; i+=query.count) {
          _(query).extend({start: i}); //pagination
          var output = LinkedInApi._searchConnections(session, query);
          promises.push(output);
        }
        Q.all(promises)
          .then(
            // Resolved
            function(data){
              data = _(data).map(function(item){
                return JSON.parse(item).poeple.values;
              });
              data = _(data).flatten(true); //only flatten the first level
              deferred.resolve(JSON.stringify(data));
            },
            // Rejected
            function(error){
              deferred.reject(error);
            }
          );
      },
      function(error){
        deferred.reject(error);
    });

  return deferred.promise;
};

// GET /people/search
//    note: related connections is not available for bulk call, must use .getProfile for each person
// Return the raw data form LinkedIn API without parse out the persons array
// default api max is 25 persons per result page
LinkedInApi._searchConnections = function (session, query) {
  console.log('- GET /PEOPLE/SEARCH - searchConnections - query >> ', query);
  /*  query: {
        title=            [title]
        keywords=         [space delimited keywords]
        facet=            [facet code, values]

        company-name=     [company name] // may not be accurate, use keywords

        facets=           [facet codes]
        first-name=       [first name]
        last-name=        [last name]
        current-title=    [true|false]
        current-company=  [true|false]
        school-name=      [school name]
        current-school=   [true|false]
        country-code=     [country code]
        postal-code=      [postal code]
        distance=         [miles]
        start=            [number]
        count=            [1-25]
        sort=             [connections|recommenders|distance|relevance] // connection: # of connection. recommenders: # of recommenders.
      }
  */
  var endPoint = "https://api.linkedin.com/v1",
      accessToken = session.passport.user.accessToken,
      url = endPoint + "/people-search:" + _PeopleSearchReturnFields,
      defaults = {
        'first-name': '',         // in order to make facet connections return results, empty name fields will return all results
        'last-name' : '',         // in order to make facet connections return results, empty name fields will return all results
        format: 'json',
        count:   25,              // default page max
        start:   0,               // specify in query for pagination
        sort:   'relevance',      // we already have your 1st degree
        facets: 'network',        // location,industry,school,current-company,past-company
        facet:  'network,F,S,A,O' // F first, S second, A groups, O out-of-network(third)
      };

  var deferred = Q.defer();

  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults,
          query, {
          oauth2_access_token: accessToken,
        })
    },function(error, response, body){
      if (error) {
        console.log('- LinkedInApi Server error: ', error);
        deferred.reject(error);
      } else {
        try {
          // When throttle limit is exceeded, api does not return error
          // so we try / catch that error when we extract persons array if that array was not returned
          body = JSON.parse(body);
          body.people.values = body.poeple.values.length > 0 ? body.poeple.values : [];
          deferred.resolve(JSON.stringify(body));
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });
  return deferred.promise;
};

// GET /people
// GET all of user's 1st degree connections
//     recursively call searchFirstDegree untill all 1st degree connections are fetched
// API calls happen synchronously one after another
//     Performance may only suffer when person has thousands of connections
//     which is rare
LinkedInApi.searchFirstDegree = function (session, query, personsArray) {
  var deferred = Q.defer();
  personsArray = personsArray || [];
  query.start  = query.start  || 0;
  query.count  = query.count  || 500;

  LinkedInApi._searchFirstDegree(session, query)
    .then(
      function(data){
        if (typeof data === 'string'){
          data = JSON.parse(data);
        }
        // plucking the persons array from api return data and combine with previously fetched persons
        personsArray = personsArray.concat(data.values);
        // _total, _start, _count are properties in the api return data
        // _total: your total number of connections
        // _start: start location for pagination in the previous api call
        // _count: number of connections in the prevous api call result
        if((data._start + data._count) >= data._total ){
          deferred.resolve(personsArray);
        }
        else{
          query.start += 500;
          deferred.resolve(LinkedInApi.searchFirstDegree(session, query, personsArray));
        }
      },
      function(error){
        deferred.reject(error);
      });

  return deferred.promise;
};

// GET /people
// GET user's 1st degree connections, default is first 500 connections
// Return the raw data form LinkedIn API without parse out the persons array
LinkedInApi._searchFirstDegree = function (session, query) {
  console.log('- GET /people - _searchFirstDegree - for >> ', session.passport.user.id);
  var endPoint    = "https://api.linkedin.com/v1/people/",
      id          = session.passport.user.id,
      accessToken = session.passport.user.accessToken,
      url         = endPoint + "id=" + id + "/connections:(" + _BasicProfileFields + ")",
      defaults    = {
        // modified:         '', // 'updated' | 'new'
        // 'modified-since': '', // Unix time stamp of milliseconds since epoch
        format: 'json',
        count: 500, // default max
        start: 0    // specify different start value in query for pagination
      };

  var deferred = Q.defer();

  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults,
          query, {
          oauth2_access_token: accessToken,
        })
    },function(error, response, body){
      if (error) {
        console.log('- LinkedInApi Server error: ', error);
        deferred.reject(error);
      } else {
        try {
          // When throttle limit is exceeded, api does not return error
          // so we try / catch that error when we extract persons array if that array was not returned
          body = JSON.parse(body);
          body.values = body.values.length > 0 ? body.values : [];
          deferred.resolve(JSON.stringify(body));
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });

  return deferred.promise;
};

// GET /people/:id
LinkedInApi.getProfile = function(session, id){

  id = id || session.passport.user.id;
  var endPoint    = "https://api.linkedin.com/v1/people/",
      accessToken = session.passport.user.accessToken,
      url         = endPoint + 'id=' + id + ":(" + _AllFields + ")",
      defaults    = {
        format: 'json'
      };

  var deferred = Q.defer();

  request({
      method: 'GET',
      url: url,
      qs: _.extend(defaults, {
        oauth2_access_token: session.passport.user.accessToken
      })
    }, function(error, response, body){
      if (error) {
        console.log('- LinkedInApi Server error: ', error);
        deferred.reject(error);
      } else {
        try {
          // When throttle limit is exceeded, api does not return error
          // so we try / catch that error when we extract values that were not returned
          JSON.parse(body).id.length;
          deferred.resolve(body);
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });

  return deferred.promise;
};

// Not Currently Used,
// will be usefull for future release when we want to pass company ids into people/search facets to make results even more relevant to job search
LinkedInApi.searchCompanies = function(session, companyNames) {
  console.log('- LinkedInApi.searchCompanies >>');

  // var endPoint = "https://api.linkedin.com/v1/companies::(universal-name=convergent-manufacturing-technologies-inc-)",
  var endPoint = "https://api.linkedin.com/v1/company-search:(companies:(id,name,universal-name))",
      accessToken = session.passport.user.accessToken,
      url = endPoint,
      defaults = {
        keywords: 'composite software',
        format: 'json',
        count: '110',
        sort: 'relevance'
      };

  var deferred = Q.defer();

  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults,{
          oauth2_access_token: accessToken,
        })
    },function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        try {
          deferred.resolve(body);
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });
  return deferred.promise;
};
