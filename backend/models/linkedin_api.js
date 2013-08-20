var request = require('request');

var LinkedInApi = module.exports = {};

var endPoint = "https://api.linkedin.com/v1/people/";
var defaults = {
  format: 'json'
};

LinkedInApi.search = function (req) {
  var deferred = Q.defer();
  var id = req.session.userID;
  var accessToken = req.session.accessToken;
  var url = endPoint + "id=" + id + "/connections:(headline,first-name,last-name,positions,picture-url)";
  var query =
  request({
    method: 'GET',
    url: url,
    qs: _.extend(defaults, {
      oauth2_access_token: accessToken,
      count: '1',
      start: '0'
    }) // query properties will override defaults
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