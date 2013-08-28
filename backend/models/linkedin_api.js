var request = require('request');

var LinkedInApi = module.exports = {};

var _BasicProfileFields = "id,first-name,last-name,headline,location:(name),industry,distance,relation-to-viewer:(related-connections),num-connections,num-connections-capped,summary,specialties,positions,picture-url,picture-urls::(original),site-standard-profile-request,public-profile-url";

var _FullProfileFields = "last-modified-timestamp,associations,interests,publications:(title,publisher,authors:(name),summary,url),patents:(title,summary,inventors:(name),url),languages:(language:(name),proficiency:(level)),skills:(skill:(name)),certifications:(name),educations:(school-name,field-of-study,degree,activities,notes),courses:(name),volunteer:(volunteerExperiences:(role,organization)),three-current-positions,three-past-positions,num-recommenders,recommendations-received:(recommendation-type,recommendation-text,recommender),mfeed-rss-url,job-bookmarks,date-of-birth,member-url-resources,related-profile-views,connections:(id),group-memberships,network";

// skills:(???)

var _ContactInfoFields = "email-address,phone-numbers,im-accounts,main-address,twitter-accounts";

var _AllFields = _BasicProfileFields + "," + _FullProfileFields + "," + _ContactInfoFields;

var _PeopleSearchReturnFields = "(people:(" + _AllFields + "),facets:(code,name,buckets:(code,name,count)))";

// GET /people/search
// related connections is not available for any bulk call
LinkedInApi.searchConnections = function (session, query) {
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
        'first-name': '',
        'last-name' : '',
        format: 'json',
        count:  '25',         // default page max
        start:  '0',          // specify in query for pagination
        sort:   'relevance',  // we already have your 1st degree
        facets: 'network',    // location,industry,school,current-company,past-company
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
        deferred.reject(error);
      } else {
        try {
          body = JSON.stringify(JSON.parse(body).people.values);
          body = body ? body : "[]";
          deferred.resolve(body);
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });
  return deferred.promise;
};

// GET 100 connections, 25 per page x 4 pages
LinkedInApi.getOneHundredConnections = function(session, query){

  var deferred = Q.defer();
  var promises = [];
  for(var i = 0; i < 100; i+=25) {
    _(query).extend({start: i}); //pagination
    var output = LinkedInApi.searchConnections(session, query);
    promises.push(output);
  }

  Q.all(promises)
    .done(
      // Resolved
      function(data){
        data = _(data).map(function(item){
          return JSON.parse(item);
        });
        data = _(data).flatten(true); //only flatten the first level
        deferred.resolve(JSON.stringify(data));
      },
      // Rejected
      function(error){
        deferred.reject(error);
      }
    );

  return deferred.promise;

};


// GET /people/:id
LinkedInApi.getProfile = function(session, id){

  //TODO: currently only fetching profile with linkedin id, ignoring cases when only public url is available
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

// GET /people/
// GET ALL OF USER'S FIRST DEGREE CONNECTIONS
LinkedInApi.searchFirstDegree = function (session, query) {
  console.log('- GET /people/ - FIRST DEDREE - for >> ', session.passport.user.id);
  var endPoint    = "https://api.linkedin.com/v1/people/",
      id          = session.passport.user.id,
      accessToken = session.passport.user.accessToken,
      url         = endPoint + "id=" + id + "/connections:(" + _AllFields + ")",
      defaults    = {
        // modified:         '', // 'updated' | 'new'
        // 'modified-since': '', // Unix time stamp of milliseconds since epoch
        format: 'json',
        count: '500', // default max
        start: '0'    // specify different start value in query for pagination
      };
  /*  query: {
        start:
      }
  */

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

// LinkedInApi.searchCompanies = function(session, companyNames) {
//   console.log('- LinkedInApi.searchCompanies >>');

//   // var endPoint = "https://api.linkedin.com/v1/companies::(universal-name=convergent-manufacturing-technologies-inc-)",
//   var endPoint = "https://api.linkedin.com/v1/company-search:(companies:(id,name,universal-name))",
//       accessToken = session.passport.user.accessToken,
//       url = endPoint,
//       defaults = {
//         keywords: 'composite software',
//         format: 'json',
//         count: '110',
//         sort: 'relevance'
//       };

//   var deferred = Q.defer();

//   request({
//     method: 'GET',
//     url: url,
//     qs: _.extend(defaults,{
//           oauth2_access_token: accessToken,
//         })
//     },function(error, response, body){
//       if (error) {
//         deferred.reject(error);
//       } else {
//         try {
//           // body = JSON.stringify(JSON.parse(body).people.values);
//           deferred.resolve(body);
//         } catch (error){
//           console.log('- LinkedInApi error: ', error, body);
//           deferred.reject(body.message);
//         }
//       }
//   });
//   return deferred.promise;
// };
