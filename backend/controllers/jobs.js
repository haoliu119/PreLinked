var IndeedApi = require('../models/indeed_api.js');
var fs        = require('fs');
var path      = require('path');
var _helper   = require('./_helper.js');

var jobs = module.exports = {};

// GET /jobs/search
jobs.search = function(req, res){
  console.log('- GET /jobs/search - Controller -> IndeedApi.searchConnections >> ');
  // IndeedApi endpoit
  // IndeedApi.search(req.query)
  //   .done(
  //     //Resolved: json returned from Indeed API
  //     function(json) {
  //       _helper.resolved(req, res, json);
  //     },
  //     //Rejected: error message from Indeed API
  //     function(error) {
  //       _helper.rejected(req, res, error);
  //   });

  // //Dummy data
  var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  _helper.resolved(req, res, fileContent);

};

jobs.searchSorted = function(req, res){
  console.log('-controller-jobs.searchSorted()');
  var jobs = [{jobTitle:'Software Engineer'}];
  var connections = [{name:'Larry Page'}];

  var sortJobs = function(inputJobs, inputConnections){
    _(inputJobs).each(function(inputJob){
      inputJob.pScore = Math.random();
      inputJob.pConnections = [inputConnections[0]];
      //todo
      //fix dummy data
    });
    return inputJobs;
  };

  var jobsSorted = sortJobs(jobs, connections);

  _helper.resolved(req, res, jobsSorted);
};