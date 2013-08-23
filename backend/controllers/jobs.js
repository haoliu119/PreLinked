var IndeedApi = require('../models/indeed_api.js');
var LinkedInApi = require('../models/linkedin_api.js');
var fs        = require('fs');
var path      = require('path');
var _helper   = require('./_helper.js');
var personsController = require('./persons.js');

var jobs = module.exports = {};

var _grabMultiplePages = function(req_query) {
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
        deferred.resolve(data);
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

var _saveInSearch = function(inSearch, myId){
  if(typeof inSearch === 'string'){
    inSearch = JSON.parse(inSearch);
    //API returns a string
  }
  if(inSearch && inSearch.people && inSearch.people.values){
    _(inSearch.people.values).each(function(data){
      personsController._put(data, myId)
        .then(function(){
          console.log('Data saved successfully.');
        });
      // console.log(Object.keys(data) + '\n\n');
      // apiStandardProfileRequest,distance,firstName,headline,id,industry,
      // lastName,location,numConnections,numConnectionsCapped,pictureUrl,positions,
      // publicProfileUrl,relationToViewer,siteStandardProfileRequest,summary
    });
  }
//apiStandardProfileRequest

};

var _saveFirstDegree = function(inFirstDegree, myId){
  if(typeof inFirstDegree === 'string'){
    inFirstDegree = JSON.parse(inFirstDegree);
    //API returns a string
  }
  if(inFirstDegree && inFirstDegree.values){
    _(inFirstDegree.values).each(function(data){
      personsController._put(data, myId)
        .then(function(){
          console.log('Data saved successfully.');
        });
    });
  }
};

jobs.searchSorted = function(req, res){
  console.log('-controller-jobs.searchSorted()');

  var promises = [];
  //todo
  //remove this default query string in the future
  req.query.q = req.query.q || 'Software Engineer';
  req.query.keywords = req.query.keywords || 'Software Engineer';
  // promises.push( IndeedApi.search(req.query) );
  promises.push( LinkedInApi.searchConnections(req.session, req.query) );
  promises.push( LinkedInApi.searchFirstDegree(req.session, req.query) );

  Q.all(promises)
    .spread(function(inSearch, inFirstDegree){
      // console.log('IndeedApi data: \n', indeedData);
      console.log('LinkedInApi search data: \n');
      _saveInSearch(inSearch, req.session.passport.user.id);

      console.log('LinkedInApi first degree data: \n');
      _saveFirstDegree(inFirstDegree, req.session.passport.user.id);
    });

  //dummy1
  // var connections = [{name:'Larry Page'}];
  //dummy2
  var connectionsFileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  var connections = JSON.parse(connectionsFileContent);

  var sortJobs = function(inputJobs, inputConnections){
    _(inputJobs).each(function(inputJob){
      inputJob.pScore = Math.random();
      inputJob.pConnections = _(inputConnections).filter(function(conn){
        return (Math.random() < 1/4 ? true : false);
      });
      //todo
      //fix dummy data
    });
    return inputJobs;
  };

  var jobsSorted = sortJobs(jobs, connections);

  _helper.resolved(req, res, jobsSorted);
};