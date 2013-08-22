var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');
var _helper     = require('./_helper.js');

var linkedin    = module.exports = {};


// GET /people/search
linkedin.searchConnections = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Controller -> LinkedIn.searchConnections >> ');
  // if user is logged in through LinkedIn
  // if (req.session.passport.user){
  //   LinkedInApi.searchConnections(req.session, req.query)
  //     .done(
  //       //Resolved: json returned from LinkedIn API
  //       function(json) {
  //         _helper.resolved(req, res, json);
  //       },
  //       //Rejected: error message from LinkedIn API
  //       function(error) {
  //         _helper.rejected(req, res, error);
  //     });
  // } else {
  //   _helper.sessionNotAvl(req, res);
  // }

  // Dummy Data
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  _helper.resolved(req, res, fileContent);

};

// GET /people/:id
linkedin.getProfile = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + req.params.id);
  if (req.session.passport.user){
    LinkedInApi.getProfile(req.session, req.params)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          _helper.resolved(req, res, json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }
};

// GET /people/
linkedin.searchFirstDegree = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Controler - LinkedIn.searchFirstDegree >>');
  if (req.session.passport.user){
    LinkedInApi.searchFirstDegree(req.session, req.query)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          _helper.resolved(req, res, json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }
};




