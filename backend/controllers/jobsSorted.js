var fs      = require('fs');
var path    = require('path');
var natural = require('natural');
// Other Controllers
var jobsCRUD = require('./jobsCRUD.js');
var jobs     = require('./jobs.js');
var personsController = require('./persons.js');
var _helper   = require('./_helper.js');
// API models
var IndeedApi   = require('../models/indeed_api.js');
var LinkedInApi = require('../models/linkedin_api.js');

var jobsSorted = module.exports = {};

// MAIN function for this file
// return to client an object:
//{ jobs:        [array of job objects],
//  connections: [array of people objects] }
jobsSorted.searchSorted = function(req, res){
  //check for sesssion, if not avaliable, only fetch indeed
  var forIndeedApi = {
    userip      :  _helper.getClientIp(req),
    useragent   :  req.headers['user-agent'],
  };
  req.query = _.extend(req.query, forIndeedApi);

  var isLoggedin = req.session && req.session.passport.user && req.session.passport.user.id;
  if(!isLoggedin){
    IndeedApi.search(req.query, 100)
      .done(
        function(data){
          data = {jobs: JSON.parse(data)};
          _helper.resolved(req, res, JSON.stringify(data));
        },
        function(error){
          _helper.rejected(req, res, error);
        });
  }else{
    _getJobsAndConnections(req, res)
      .done(
        function(JC){
        // JC is an object with two properties
          if(JC.jobs){
            if(JC.connections){
            // if both jobs and connections APIs returned success
              var jobs = JC.jobs,
                  connections = JC.connections;
              JC.jobs = _sortJobs(jobs, connections);
              _helper.resolved(req, res, JSON.stringify(JC));
            }else{
              // if Linkedin Errored Out
              _helper.resolved(req, res, JSON.stringify(JC));
            }
          }else{
            // if jobs errored out, but we know Linkedin returned success
              _helper.resolved(req, res, JSON.stringify(JC));
          }
        },
        // Both Indeed and LinkedIn APIs Errored Out
        function(error){
          _helper.rejected(req, res, JSON.stringify(error));
        });
  }
};

var _getJobsAndConnections = function(req, res){
  var deferred = Q.defer();
  var promises = [];

  //first, indeed jobs
  var jobsPromise = IndeedApi.search(req.query, 100);
  promises.push(jobsPromise);
  var inPromise = LinkedInApi
      .searchConnections(
        req.session,
        req.query,
        50,    // max number of conneciton to return from API, watchout for throttle limit
        ["first", "second", "group", "third"]); // modify this array to specify degree of connection to search within

  inPromise.then(
    // LinkedIn API successfully returned
    function(connectionsData){
      promises.push(inPromise);
      // When jobsPromise is also done
      Q.all(promises).then(
        // If Both Indeed and Linkedin calls were successful
        function(data){
          //convert data from string to objects
          data = _(data).map(function(value, index){
            return JSON.parse(value);
          });
          var jobs = data[0]; //first element is always indeed jobs because we pushed it first
          var connections = data[1];
          console.log('- GET jobs/search - jobsSorted - jobs: \n', jobs.length);
          console.log('- GET jobs/search - jobsSorted - connections: \n', connections.length);
          deferred.resolve({jobs: jobs, connections: connections});
        },
        // Indeed API returned error, but we still want to return LinkedIn results
        function(jobsError){
          deferred.resolve({connections: JSON.parse(connectionsData), jobsError: jobsError});
        });
    },
    // LinkedIn API errored out, but we still want to return Indeed Results
    function(connectionsError){
      Q.all(promises).then(
        // Indeed returned success
        function(data){
          deferred.resolve({jobs: JSON.parse(data[0]), connectionsError: connectionsError});
        },
        // Indeed also errored out
        function(jobsError){
          deferred.reject({jobsError: jobsError, connectionsError: connectionsError});
        });
    });

  return deferred.promise;
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

var _getScores = function(job, connections){
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
      // friend.linkedinTitles = [];

      _(conn.positions.values).each(function(conn){
        friend.linkedinCompanies.push( conn.company && conn.company.name );
        // friend.linkedinTitles.push( conn.title || '' );
      });
    }


    var companyStringDistances = _(friend.linkedinCompanies).map(function(company){
      return natural.JaroWinklerDistance(employer, company);
    });
    friend.companyStringDistance = _(companyStringDistances).max();

    // var titleStringDistances = _(friend.linkedinTitles).map(function(title){
    //   return natural.JaroWinklerDistance(queryJobTitle, title);
    // });
    // friend.titleStringDistance = _(titleStringDistances).max();

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
  // var titleThreshold = 0.7;
  // _(friends).each(function(friend){
  //   if(friend.distance === 1){
  //     var titleScore = friend.titleStringDistance > titleThreshold ? 1 : 0;
  //     friend.pScore = friend.pScore * titleScore;
  //   }
  // });

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

// =====================================================
// === Functions for Internal Use or Future Features ===
// =====================================================

//testing function for internal purposes
jobsSorted.testScore = function(req, res){
  _getJobsAndConnections(req, res);
};

// Currently Not Used to save job posts to DB
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
