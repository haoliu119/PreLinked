var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');
var _helper     = require('./_helper.js');
var Person      = require('../models/persons.js');

var linkedin    = module.exports = {};

var parseLinkedInResults = function(json){
  json = _.reject(JSON.parse(json), function(person){
    return (person.id.toLowerCase() === 'private' || person.lastName.toLowerCase() === 'private' || person.firstName.toLowerCase() === 'private' || person.distance === -1);
  });
  return JSON.stringify(json);
};

// GET /people/search
linkedin.searchConnections = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Controller -> LinkedIn.searchConnections >> ');

  /*
  /* LinkedIn API ------------------------
  */

  if (req.session.passport.user){
    LinkedInApi.searchConnections(req.session, req.query)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          json = parseLinkedInResults(json);
          Person._bulkUpsert(json);
          _helper.resolved(req, res, json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }

  /*
  /* Dummy Data ------------------------
  */

  // var fileName = "_LinkedIn_People_Search_3rd_Degree_P01.json";
  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  // _helper.resolved(req, res, fileContent);

};

// GET /people/:id
linkedin.getProfile = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + req.params.id);

  /*
  /* LinkedIn API ------------------------
  */

  if (req.session.passport.user){
    var id = req.params.id ? req.params.id : req.session.passport.user.id;
    LinkedInApi.getProfile(req.session, id)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          Person._upsert(json);
          _helper.resolved(req, res, json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }

  /*
  /* Dummy Data ------------------------
  */

  // var fileName = "_LinkedIn_Profile_Sample_1st_Degree.json";
  // var fileName = "_LinkedIn_Profile_Sample_2nd_Degree.json";
  // var fileName = "_LinkedIn_Profile_Sample_3rd_Degree.json";
  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  // _helper.resolved(req, res, fileContent);

};

// GET /people/
linkedin.searchFirstDegree = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Controler - LinkedIn.searchFirstDegree >>');

  /*
  /* LinkedIn API ------------------------
  */

  if (req.session.passport.user){
    LinkedInApi.searchFirstDegree(req.session, req.query)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          Person._bulkUpsert(json);
          _helper.resolved(req, res, json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }

  /*
  /* Dummy Data ------------------------
  */

  // var fileName = "_LinkedIn_People_My_First_Degrees_P01.json";
  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), 'utf8');
  // _helper.resolved(req, res, fileContent);

};



