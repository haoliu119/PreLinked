var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');
var _helper     = require('./_helper.js');

var linkedin    = module.exports = {};


// GET /people/search
linkedin.searchConnections = function(req, res, testCallback){
  console.log('- '+ req.method + ' ' + req.url + ' - Controller -> LinkedIn.searchConnections >> ');

  /*
  /* Lindedin API ------------------------
  */

  // if (req.session.passport.user){
  //   LinkedInApi.searchConnections(req.session, req.query)
  //     .done(
  //       //Resolved: json returned from LinkedIn API
  //       function(json) {
  //         if (testCallback) {
  //           testCallback(json);
  //         }
  //         _helper.resolved(req, res, json);
  //       },
  //       //Rejected: error message from LinkedIn API
  //       function(error) {
  //         _helper.rejected(req, res, error);
  //     });
  // } else {
  //   _helper.sessionNotAvl(req, res);
  // }

  /*
  /* Dummy Data ------------------------
  */

  var fileName = "_LinkedIn_People_Search_2nd_Degree_P01.json";
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  _helper.resolved(req, res, fileContent);

};

// GET /people/:id
linkedin.getProfile = function(req, res, testCallback){
  console.log('- '+ req.method + ' ' + req.url + req.params.id);

  /*
  /* Lindedin API ------------------------
  */

  // if (req.session.passport.user){
  //   LinkedInApi.getProfile(req.session, req.params)
  //     .done(
  //       //Resolved: json returned from LinkedIn API
  //       function(json) {
  //         if (testCallback) {
  //           testCallback(json);
  //         }
  //         _helper.resolved(req, res, json);
  //       },
  //       //Rejected: error message from LinkedIn API
  //       function(error) {
  //         _helper.rejected(req, res, error);
  //     });
  // } else {
  //   _helper.sessionNotAvl(req, res);
  // }

  /*
  /* Dummy Data ------------------------
  */

  // var fileName = "_LinkedIn_Profile_Sample_1st_Degree.json";
  var fileName = "_LinkedIn_Profile_Sample_2nd_Degree.json";
  // var fileName = "_LinkedIn_Profile_Sample_3rd_Degree.json";
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  _helper.resolved(req, res, fileContent);

};

// GET /people/
linkedin.searchFirstDegree = function(req, res, testCallback){
  console.log('- '+ req.method + ' ' + req.url + ' - Controler - LinkedIn.searchFirstDegree >>');

  /*
  /* Lindedin API ------------------------
  */

  // if (req.session.passport.user){
  //   LinkedInApi.searchFirstDegree(req.session, req.query)
  //     .done(
  //       //Resolved: json returned from LinkedIn API
  //       function(json) {
  //         if (testCallback) {
  //           testCallback(json);
  //         }
  //         _helper.resolved(req, res, json);
  //       },
  //       //Rejected: error message from LinkedIn API
  //       function(error) {
  //         _helper.rejected(req, res, error);
  //     });
  // } else {
  //   _helper.sessionNotAvl(req, res);
  // }

  /*
  /* Dummy Data ------------------------
  */

  var fileName = "_LinkedIn_People_My_First_Degrees_P01.json";
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  _helper.resolved(req, res, fileContent);

};




