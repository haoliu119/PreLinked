// var LinkedInApi = require('../models/linked_api.js');
var fs        = require('fs');
var path = require('path');

var linkedin = module.exports = {};

// GET /jobs/search
linkedin.search = function(req, res){
  /* dummy data for frontend work
  /*/
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  res.json(fileContent);

  /* LinkedInApi endpoit
  /* TODO: check if it's html or json request
  /*/
  // LinkedInApi.search(req.query).then(function(json) {
  //   res.json(json);
  // })
};