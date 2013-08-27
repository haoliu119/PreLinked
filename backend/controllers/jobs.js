var IndeedApi = require('../models/indeed_api.js');
var LinkedInApi = require('../models/linkedin_api.js');
var fs        = require('fs');
var path      = require('path');
var _helper   = require('./_helper.js');
var personsController = require('./persons.js');
var jobsController = require('../controllers/jobs_controller.js');
var natural = require('natural');

var jobs = module.exports = {};

var _grabOnePage = function(req_query){
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
var _grabMultiplePages = jobs.grabPages = function(req_query) {
  var deferred = Q.defer();
  var promises = [];
  for(var i = 0; i < 100; i+=25) {
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


// GET /jobs/search
jobs.search = function(req, res, testCallback){
  console.log('- GET /jobs/search - Controller -> IndeedApi.searchConnections >> ');

  req.query.useragent = req.headers['user-agent'];
  req.query.userip = _helper.getClientIp(req);
  /*
  /* Indeed API with Pagination ------------------------
  */

  _grabMultiplePages(req.query)
    .done(
      // Resolved
      function(json) {
        console.log('Paginated JSON Data length',json.length);
        _helper.resolved(req, res, json);
      },
      // Rejected:
      function(error) {
        _helper.rejected(req, res, error);
    });

  // console.log('job results ************', jobResults);

  /*
  /* Indeed API Single Call ------------------------
  */

  // IndeedApi.search(req.query, {}, testCallback)
  //   .done(
  //     //Resolved: json returned from Indeed API
  //     function(json) {
  //       console.log('Length >>>>>>',json.length);
  //       _helper.resolved(req, res, json);
  //     },
  //     //Rejected: error message from Indeed API
  //     function(error) {
  //       _helper.rejected(req, res, error);
  //   });


  /*
  /* Dummy Data ------------------------
  */

  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  // _helper.resolved(req, res, fileContent);

};