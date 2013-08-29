var IndeedApi = require('../models/indeed_api.js');

var jobs = module.exports = {};

jobs._grabOnePage = function(req_query){
  var deferred = Q.defer();
  IndeedApi
    .search(req_query, {start: 0})
    .then(function(data){
      if(typeof data === 'string'){
        data = JSON.parse(data);
      }
      deferred.resolve(data);
    });
  return deferred.promise;
};

//temp solution for now
//todo
jobs._grabMultiplePages = function(req_query, pageCount) {
  var deferred = Q.defer();
  var promises = [];
  pageCount = pageCount || 4;
  for(var i = 0; i < ( 25 * pageCount ); i+=25) {
    var output = IndeedApi.search(req_query, {start: i});
    promises.push(output);
  }

  Q.all(promises)
    .done(
      // Resolved
      function(data){
        data = _(data).map(function(item){
          return JSON.parse(item);
        });
        data = _(data).flatten(true); //only flatten the first level
        deferred.resolve(JSON.stringify(data));
      },
      // Rejected
      function(error){
        deferred.reject(error);
      }
    );

  return deferred.promise;
};