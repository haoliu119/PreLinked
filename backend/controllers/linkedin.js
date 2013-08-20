var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');

var linkedin    = module.exports = {};

// GET /people/search
linkedin.searchConnections = function(req, res){
  console.log('-controller-linkedin.searchConnections-', req.params);
  LinkedInApi.searchConnections(req).then(function(json) {
    // res.json(json);

  // Dummy Data
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  res.json(fileContent);
  });
};

// GET /people/:id
linkedin.getProfile = function(req, res){
  console.log('-controller-linkedin.getProfile-', req.params);
  LinkedInApi.getProfile(req)
    .then(function(json){
      res.json(json);
    });
};

// GET /people/
linkedin.searchFirstDegree = function(req, res){
  console.log('-controller-linkedin.searchFirstDegree-', req.params);
  LinkedInApi.searchFirstDegree(req)
    .then(function(json){
      res.json(json);
    });
};