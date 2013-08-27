var IndeedApi = require('../models/indeed_api.js');
var LinkedInApi = require('../models/linkedin_api.js');
var fs        = require('fs');
var path      = require('path');
var _helper   = require('./_helper.js');
var personsController = require('./persons.js');
var jobs = require('./jobs.js');
var jobsController = require('../controllers/jobs_controller.js');
var natural = require('natural');

var jobsSorted = module.exports = {};


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

var _saveIndeedJobs = function(indeedSearch){
  if(typeof indeedSearch === 'string'){
    indeedSearch = JSON.parse(indeedSearch);
    //API might return string
  }
  if(indeedSearch.length){
    _(indeedSearch).each(function(data){
      jobsController._post(data)
        .then(function(job){
          console.log('Indeed job saved successfully: ', job);
        });
    });
  }

};

//helper method to save promises to db
var _savePromises = function(req, res, promises){
  Q.all(promises)
    // .spread(function(indeedSearch, inSearch, inFirstDegree){
    .spread(function(indeedSearch, inFirstDegree){
      console.log('IndeedApi search data: \n', indeedSearch);
      // _saveIndeedJobs(indeedSearch);

      // console.log('LinkedInApi search data: \n');
      // _saveInSearch(inSearch, req.session.passport.user.id);

      console.log('LinkedInApi first degree data: \n', inFirstDegree);
      // _saveFirstDegree(inFirstDegree, req.session.passport.user.id);

      _helper.resolved(req, res, indeedSearch);
      res.end('end');
    });
};

//testing function
jobsSorted.testScore = function(req, res){
  _getJobsAndConnections(req, res);
};

var _getJobsAndConnections = function(req, res){
  var deferred = Q.defer();
  var promises = [];

  //defaults for req.query
  var defaultReqQuery = {
    jobTitle    :  [],
    company     :  [],
    jobLocation :  'San Francisco, CA',
    jobKeywords :  [],
    distance    :  25,
    minSalary   :  null,
    maxSalary   :  null,
    useragent   :  req.headers['user-agent'],
    userip      :  _helper.getClientIp(req)
  };

  //first, indeed jobs
  var indeed_query_obj = _(defaultReqQuery).extend(req.query);
  promises.push( jobs.grabPages(indeed_query_obj) );

  //second, linkedin first degrees
  //First 500 for now
  promises.push( LinkedInApi.searchFirstDegree(req.session) );

  //third, linkedin second degrees
  var linkedin_second_degree_query_obj = {
    title   : 'software engineer',
    keywords: 'google san francisco, ca',
    start   : '0',
    facet   : 'network,S'
  };
  promises.push( LinkedInApi.searchConnections(req.session, linkedin_second_degree_query_obj) );

  //fourth, linkedin third degrees
  var linkedin_third_degree_query_obj = {
    title   : 'software engineer',
    keywords: 'google san francisco, ca',
    start   : '0',
    facet   : 'network,A,O'
  };
  promises.push( LinkedInApi.searchConnections(req.session, linkedin_third_degree_query_obj) );

  //input
  //100 indeed jobs
  //500 1st degree
  //25 2nd degree
  //25 3rd degree

  Q.all(promises)
    .then(function(data){
      data = _(data).map(function(value, index){
        console.log('data ' + index, value.length, value.substring(0,200) + '\n');
        return JSON.parse(value);
      });
      //convert data from string to objects

      if(data.length === 4){
        //first element is indeed jobs
        //the last three elements are linkedin connections
        var jobs = data[0];
        if(data[1].values && data[1].values.length){
          var connections = data[1].values.concat( data[2], data[3] );
        }
        console.log('jobs: \n', jobs.length);
        console.log('connections: \n', connections.length);
        // _helper.resolved(req, res, [jobs, connections]);
        deferred.resolve([jobs, connections]);
      }
    });

  return deferred.promise;
};



var _getScores = function(job, connections){
  var employer = job.company; // Apple
  // console.log('employer from indeed\n', employer);

  var friends = [];
  _(connections).each(function(conn){
    var friend = {};
    //extend so we are not overwritting anything
    friend = _(friend).extend(conn);

    friend.distance = parseInt(friend.distance, 10);

    //look at all the positions, compare all of them against the employer name and get scores
    //return the max of scores
    if(conn.positions && conn.positions.values && conn.positions.values.length){
      friend.positions = _(conn.positions.values).map( function(conn){
        return conn.company && conn.company.name;
      } );
    }
    var stringDistances = _(friend.positions).map(function(pos){
      return natural.JaroWinklerDistance(employer, pos);
    });
    friend.stringDistance = _(stringDistances).max();

    friends.push(friend);
  });

  //weigh the stringDistance by the degree of connections
  //expect heavy tweaking here
  //cut the sore by an arbitrary threshold
  var weightByDegree = {
    1: 100,
    2: 10,
    3: 1
  };
  var threshold = 0.8;
  _(friends).each(function(friend){
    var score = friend.stringDistance > threshold ? friend.stringDistance : 0;
    friend.pScore = score * weightByDegree[ friend.distance ];
    //todo, why NaN in some cases?
    //NaN is falsy, hence, the line below converting NaN to 0
    friend.pScore = friend.pScore || 0;
  })


  //sort friends array by pScore
  friends = _(friends).sortBy(function(friend){
    return -1 * friend.pScore;
  });

  //return the sum of all scores for now
  //probably should only return the top ten scores
  var total_score = _(friends).reduce(function(memo, friend){
    return memo + friend.pScore;
  }, 0 );

  //return the number of connections who works in that company
  var pCount = _(friends).reduce(function(memo, friend){
    var zeroOrOne = friend.stringDistance > threshold ? 1: 0;
    return memo + zeroOrOne;
  }, 0 );

  //return top 25 connections
  var n_return = 25;
  var friends_return = _(friends).first(n_return);

  // console.log('best match from linkedin connections\n', friends[0], total_score );
  return {
    pScore        : total_score,
    pConnections  : friends_return,
    pCount        : pCount
  };
};

var _sortJobs = function(inputJobs, inputConnections){
  _(inputJobs).each(function(inputJob){
    var scores = _getScores(inputJob, inputConnections);
    inputJob.pScore = scores.pScore;
    inputJob.pConnections = scores.pConnections;
    inputJob.pCount = scores.pCount;
  });
  return inputJobs;
};

//MAIN function for this file
jobsSorted.searchSorted = function(req, res){

  _getJobsAndConnections(req, res)
    .then(function(jobsAndConnections){
      console.log('-controller-jobs.searchSorted()');

      var jobs = jobsAndConnections[0];
      var connections = jobsAndConnections[1];
      var sorted = _sortJobs(jobs, connections);

      _helper.resolved(req, res, sorted);

    });

};