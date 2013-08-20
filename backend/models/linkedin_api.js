var request = require('request');

var LinkedInApi = module.exports = {};


LinkedInApi.searchConnections = function (req) {
  /* expect req.query to contain:
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

// https://api.linkedin.com/v1/people/id=GLgKsKoL1H/connections:(headline,first-name,last-name,positions,picture-url)?format=json&oauth2_access_token=AQVdT8hXNIqHnty2zZKNdSOUtUCz0JPxW8_T4_Wx5oLKBJZUnHH3KslO4M3J2XIdLw8aRgt1tNGkl2hJnQVbOX23KunbeyFqWsNjzt7gRo92PXiGm6FUYo6ICoDT6BZzO4YTS9G7sRu5wVoHiq5_dijFHAkbj8bNGBmaImq_3jnl1cGqxjw
LinkedInApi.getProfile = function(req, in_id){
  in_id = in_id || "HbRybmNgE6"; // if no in_id, provie shao's id as default
  var endPoint = "https://api.linkedin.com/v1/people/";
  var url = endPoint + 'id=' + in_id;
  var defaults = {
    format: 'json'
  };
  var deferred = Q.defer();

  request({
      method: 'GET',
      url: url,
      qs: _.extend(defaults, {
        oauth2_access_token: req.session.accessToken
      })
    }, function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        deferred.resolve(body);
      }
    }
  );
  // console.log('models', req.params, req.session.accessToken);
  return deferred.promise;
};

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