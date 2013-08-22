var request = require('request');

var LinkedInApi = module.exports = {};

// GET /people/search
LinkedInApi.searchConnections = function (session, query) {
  console.log('- GET /people/search - query >> ', query);
  /* expect query to contain:
  keywords=         [space delimited keywords]
  title=            [title]
  company-name=     [company name] // may not be accurate, use keywords

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
  facet=            [facet code, values]
  facets=           [facet codes]
  sort=             [connections|recommenders|distance|relevance] // connection: # of connection. recommenders: # of recommenders.
  */
  var deferred = Q.defer();
  var endPoint = "https://api.linkedin.com/v1";
  var defaults = {
    format: 'json',
    count: '25', // default page max
    start: '0',
    sort:  'relevance' // we already have your 1st degree
  };
  var accessToken = session.passport.user.accessToken;
  // var url = endPoint + "/people-search:(people:(id,first-name,last-name,public-profile-url,picture-url,headline,location:(name),relation-to-viewer:(distance),summary,specialties,positions,skills),num-results)";
  var url = endPoint + "/people-search:(people:(id,picture-url,public-profile-url,last-modified-timestamp,first-name,last-name,email-address,twitter-accounts,phone-numbers,im-accounts,main-address,member-url-resources,date-of-birth,headline,location:(name),industry,distance,relation-to-viewer:(distance),connections,num-connections,num-connections-capped,related-profile-views,summary,positions,three-current-positions,three-past-positions,job-bookmarks,num-recommenders,recommendations-received,mfeed-rss-url,specialties,interests,skills,certifications,educations,courses,volunteer,associations,publications,patents,languages,site-standard-profile-request,api-standard-profile-request),num-results,facets:(code,name,buckets:(code,name,count,selected)))";
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
          // body = JSON.stringify(JSON.parse(body).people.values);
          deferred.resolve(body);
        } catch (error){
          console.log('- LinkedInApi error: ', error, body);
          deferred.reject(body.message);
        }
      }
  });
  return deferred.promise;
};

// GET /people/:id
LinkedInApi.getProfile = function(session, params){
  //http://developer.linkedin.com/documents/profile-api
  var endPoint = "https://api.linkedin.com/v1/people/";
  //TODO: currently only fetching profile with linkedin id, ignoring cases when only public url is available
  var url = endPoint + 'id=' + params.id +
    ":(id,first-name,last-name,industry,headline,location,summary,positions,picture-url)";
  var defaults = {
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
LinkedInApi.searchFirstDegree = function (session, query) {
  console.log('- GET /people/ - query >> ', query);
  /* expect query to contain:
  /*/
  var deferred = Q.defer();
  var endPoint = "https://api.linkedin.com/v1/people/";
  var defaults = {
    format: 'json',
    count: '1',
    start: '0'
  };
  var id = session.userID;
  var accessToken = session.passport.user.accessToken;
  var url = endPoint + "id=" + id + "/connections:(headline,first-name,last-name,positions,picture-url)";
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
