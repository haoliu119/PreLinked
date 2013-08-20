var request = require('request');

var LinkedInApi = module.exports = {};


LinkedInApi.searchFirstDegree = function (req) {
  /* expect req.query to contain:
  /*
  /*/
  var deferred = Q.defer();
  var endPoint = "https://api.linkedin.com/v1/people/";
  var defaults = {
    format: 'json',
    count: '1',
    start: '0'
  };
  var id = req.session.userID;
  var accessToken = req.session.accessToken;
  var url = endPoint + "id=" + id + "/connections:(headline,first-name,last-name,positions,picture-url)";
  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults,
          req.query, {
          oauth2_access_token: accessToken,
        })
    },function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        deferred.resolve(body);
      }
  });

  return deferred.promise;
};

LinkedInApi.searchConnections = function (req) {
  /* expect req.query to contain:
  /*
  /*/
  /*
  keywords=         [space delimited keywords]
  first-name=       [first name]
  last-name=        [last name]
  company-name=     [company name]
  current-company=  [true|false]
  title=            [title]
  current-title=    [true|false]
  school-name=      [school name]
  current-school=   [true|false]
  country-code=     [country code]
  postal-code=      [postal code]
  distance=         [miles]
  start=            [number]
  count=            [1-25]
  facet=            [facet code, values]
  facets=           [facet codes]
  sort=             [connections|recommenders|distance|relevance]
  */
  var deferred = Q.defer();
  var endPoint = "https://api.linkedin.com/v1";
  var defaults = {
    format: 'json',
    count: '25',
    start: '0'
  };
  var id = req.session.userID;
  var accessToken = req.session.accessToken;
  var url = endPoint + "/people-search:(people:(id,first-name,last-name,public-profile-url,picture-url,headline,location:(name),relation-to-viewer:(distance),summary,specialties,positions,skills),num-results)";
  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults,
          req.query, {
          oauth2_access_token: accessToken,
        })
    },function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        deferred.resolve(body);
      }
  });

  return deferred.promise;
};