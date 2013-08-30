var IndeedApi = require('../models/indeed_api.js');
var LinkedInApi = require('../models/linkedin_api.js');
var fs        = require('fs');
var path      = require('path');
var _helper   = require('./_helper.js');
var personsController = require('./persons.js');
var jobs = require('./jobs.js');
var jobsCRUD = require('./jobsCRUD.js');

var natural = require('natural');

var jobsSorted = module.exports = {};

// currently not used to save job posts to DB
// may implement caching in the future
var _saveIndeedJobs = function(indeedSearch){
  if(typeof indeedSearch === 'string'){
    indeedSearch = JSON.parse(indeedSearch);
    //API might return string
  }
  if(indeedSearch.length){
    _(indeedSearch).each(function(data){
      jobs._post(data)
        .then(function(job){
          console.log('Indeed job saved successfully: ', job);
        });
    });
  }

};

//testing function for internal purposes
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
    minSalary   :  "None",
    maxSalary   :  "None",
    useragent   :  req.headers['user-agent'],
    userip      :  _helper.getClientIp(req)
  };

  // Make Query Object for LinkedIn API
  req.query = _(defaultReqQuery).extend(req.query);
  var linkedInKeywords = req.query.jobKeywords;
  linkedInKeywords = linkedInKeywords.concat(req.query.company); // Linkedin API company parameter is inaccurate, passing companies in as keywords
  var linkdedInQueryObject = {
    title: req.query.jobTitle.join(' '),
    keywords: linkedInKeywords.join(' '),
    start: '0',
    count: '25',
  };

  //first, indeed jobs
  var indeed_query_obj = _(defaultReqQuery).extend(req.query);
  promises.push( jobs._grabMultiplePages(indeed_query_obj, 2) );

  //second, linkedin first degrees
  //First 500 for now
  promises.push( LinkedInApi.searchFirstDegree(req.session) );

  //third, linkedin second degrees
  var linkedin_second_degree_query_obj = _({facet:'network,S'}).extend(linkdedInQueryObject);
  promises.push( LinkedInApi.searchConnections(req.session, linkedin_second_degree_query_obj) );

  //fourth, linkedin third degrees
  var linkedin_third_degree_query_obj = _({facet:'network,A,0'}).extend(linkdedInQueryObject);
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
        if(data[1] && data[1].length){
          var connections = data[1].concat( data[2], data[3] );
        }
        console.log('jobs: \n', jobs.length);
        console.log('connections: \n', connections.length);
        // _helper.resolved(req, res, [jobs, connections]);
        deferred.resolve([jobs, connections]);
      }
    });

  return deferred.promise;
};



var _getScores = function(job, connections, queryJobTitle){
  var employer = job.company; // Apple
  // console.log('employer from indeed\n', employer);

  var friends = [];
  _(connections).each(function(conn){
    var friend = {};
    //extend so we are not overwritting anything
    friend = _(friend).extend(conn);

    friend.distance = parseInt(friend.distance, 10);

    //look at all the positions
    //compare all of their company name against the employer name and get scores
    //compare all of their job titles against queryJobTitle and get scores
    //return the max of scores
    if(conn.positions && conn.positions.values && conn.positions.values.length){
      friend.linkedinCompanies = [];
      friend.linkedinTitles = [];

      _(conn.positions.values).each(function(conn){
        friend.linkedinCompanies.push( conn.company && conn.company.name );
        friend.linkedinTitles.push( conn.title || '' );
      });
    }


    var companyStringDistances = _(friend.linkedinCompanies).map(function(company){
      return natural.JaroWinklerDistance(employer, company);
    });
    friend.companyStringDistance = _(companyStringDistances).max();

    var titleStringDistances = _(friend.linkedinTitles).map(function(title){
      return natural.JaroWinklerDistance(queryJobTitle, title);
    });
    friend.titleStringDistance = _(titleStringDistances).max();

    friends.push(friend);
  });

  //weigh the companyStringDistance by the degree of connections
  //expect heavy tweaking here
  //cut the sore by an arbitrary threshold
  var weightByDegree = {
    1: 100,
    2: 10,
    3: 1
  };
  var threshold = 0.8;
  _(friends).each(function(friend){
    var score = friend.companyStringDistance > threshold ? friend.companyStringDistance : 0;
    friend.pScore = score * weightByDegree[ friend.distance ];
    //todo, why NaN in some cases?
    //NaN is falsy, hence, the line below converting NaN to 0
    friend.pScore = friend.pScore || 0;
  })

  //extra step for first degree
  //if title doesn't really match, set pScore to zero
  var titleThreshold = 0.7;
  _(friends).each(function(friend){
    if(friend.distance === 1){
      var titleScore = friend.titleStringDistance > titleThreshold ? 1 : 0;
      friend.pScore = friend.pScore * titleScore;
    }
  });

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
    var zeroOrOne = friend.companyStringDistance > threshold ? 1: 0;
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

var _sortJobs = function(inputJobs, inputConnections, queryJobTitle){
  _(inputJobs).each(function(inputJob){
    var scores = _getScores(inputJob, inputConnections, queryJobTitle);
    inputJob.pScore = scores.pScore;
    inputJob.pConnections = scores.pConnections;
    inputJob.pCount = scores.pCount;
  });
  return inputJobs;
};

//MAIN function for this file
jobsSorted.searchSorted = function(req, res){

  //check for sesssion
  //if not avaliable, only fetch indeed
  var isLoggedin = req.session && req.session.passport && req.session.passport.user;
  if(!isLoggedin){
    jobsCRUD.search(req, res);
  }else{
    //for weighting the first degree Linkedin connections
    var queryJobTitle = '';
    if(req.query && req.query.jobTitle){
      queryJobTitle = req.query.jobTitle.join(' ');
    }

    _getJobsAndConnections(req, res)
      .then(function(jobsAndConnections){
        console.log('-controller-jobs.searchSorted()');

        var jobs = jobsAndConnections[0];
        var connections = jobsAndConnections[1];
        var sorted = _sortJobs(jobs, connections, queryJobTitle);

        _helper.resolved(req, res, sorted);

      });
  }
};