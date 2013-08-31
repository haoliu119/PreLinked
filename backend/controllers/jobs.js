var IndeedApi = require('../models/indeed_api.js');
var Job = require('../models/jobs.js');

var jobs = module.exports = {};

jobs._grabOnePage = function(req_query){
  var deferred = Q.defer();
  IndeedApi._search(req_query)
    .then(function(data){
      if(typeof data === 'string'){
        data = JSON.parse(data);
      }
      deferred.resolve(data);
    });
  return deferred.promise;
};

// not currently used, saved for future features
jobs._post = function(input_job){
  var deferred = Q.defer();

  var job = new Job({
    indeedJob: input_job
  });
  job.save(function(error, data){
    if(error){
      console.log('Unable to save to database: ', error);
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
};