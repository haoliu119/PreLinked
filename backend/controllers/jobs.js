var IndeedApi = require('../models/indeed_api.js');
var fs        = require('fs');
var path = require('path');

var jobs = module.exports = {};

// GET /jobs/search
jobs.search = function(req, res){
  /* dummy data for frontend work
  /*/
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  res.json(fileContent);

  /* IndeedApi endpoit
  /* TODO: check if it's html or json request
  /*/
  IndeedApi.search(req.query).then(function(json) {
    res.json(json);
  })
};