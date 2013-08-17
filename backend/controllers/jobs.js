var IndeedApi = require('../models/indeed_api.js');
var fs        = require('fs');
var path = require('path');

var jobs = module.exports = {};

jobs.search = function(req, res){
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  res.json(fileContent);
};