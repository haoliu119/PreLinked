// var users = require('../controllers/users.js');

var passport = require('passport');
var pass      = require('../controllers/passport.js');

var site      = require('../controllers/site.js');
var jobs      = require('../controllers/jobs.js');
var linkedin  = require('../controllers/linkedin.js');

module.exports = function(app) {
  app.get('/serverindex', site.index);

  //Jobs
  app.get('/jobs/search', jobs.search);

  //LinkedIn Oauth
  app.get('/auth/linkedin',
    passport.authenticate('linkedin',
      { scope: ['r_fullprofile', 'r_network'], state: '12345'  }),
      function(req, res) {});
  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      successRedirect: '/#search',
      failureRedirect: '/#home'
    })
  );
  app.get('/logout', function(req, res) {
    req.session.destroy(function(){
      // res.redirect('/#home');
      res.send(200, 'You are logged out!');
    });
  });

  // LinkedIn API
  app.get('/people/search', linkedin.searchConnections);
  app.get('/people/:id', linkedin.getProfile);
  app.get('/people/', linkedin.searchFirstDegree);

  // Users
	// app.post('/user', users.create);
	// app.get('/user', users.list);
	// app.get('/user/:id', users.read);
	// app.put('/user/:id', users.update);
	// app.del('/user/:id', users.delete);

  app.get('/session', function(req, res) {
    if(req.session && req.session.passport && req.session.passport.user){
      console.log('- GET /session >> ture, accessToken >> ', req.session.passport.user.accessToken);
      res.json(true);
    } else {
      console.log('- GET /session >> false');
      res.json(false);
    }
  });

  app.get('/test', function(req, res){
    //this is where you test random backend functions
    // console.log('- GET /test - app.get(env)', app.get('env'));

    /**
    /** TESTING LinkedIn API
    /*/
    var fs          = require('fs');
    var path        = require('path');
    // // GET /people/search
    // req.query = {title: 'software engineer', keywords: 'san francisco, ca',  facet:  'network,O' };
    // linkedin.searchConnections(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_People_Search_Results.json'), json);
    //       }
    // );

    // GET ALL FIRST DEGREE CONNECTIONS
    // req.query = {start: "500"}; // page two
    // linkedin.searchFirstDegree(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_First_Degrees_P02.json'), json);
    //       }
    // );

    // // GET MY FULL PROFILE
    req.params.id = req.session.passport.user.id;
    // req.params.id = "d3bA9zi41M";

    linkedin.getProfile(req, res,
          function(json) {
            fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_My_Profile.json'), json);
          }
    );

    /**
    /** TESTING MongoDB
    /*/

    // var Job = require('../models/jobs.js');
    // var Keyword = require('../models/keywords.js');
    // var KeywordToJob = require('../models/keywordsToJobs.js');
    // var mongoose = require('mongoose');

    // var job = new Job({
    //   indeedPost: {key:'value2 really'}
    // });
    // job.save(function(error, data){
    //   if(error){
    //     console.log('Error in saving job:', error);
    //   } else {
    //     console.log('Success in saving job:', data);
    //   }
    // });


    // var keyword = new Keyword({
    //   keyword: 'software'
    // });
    // keyword.save(function(error, data){
    //   if(error){
    //     console.log('Error in saving keyword:', error);
    //   } else {
    //     console.log('Success in saving keyword:', data);
    //   }
    // });

    // var keywordToJob = new KeywordToJob({
    //   keywordId: mongoose.Types.ObjectId('52159e06958f70e51b000001'),
    //   jobId: mongoose.Types.ObjectId('5215a3522dfd9f1e1c000001')
    // });
    // keywordToJob.save(function(error, data){
    //   if(error){
    //     console.log('Error in saving keywordToJob:', error);
    //   } else {
    //     console.log('Success in saving keywordToJob:', data);
    //   }
    // });

    // Keyword.findOne({"keyword":"software"}, function(error, data){
    //   KeywordToJob.find({"keywordId": data._id}, {"jobId": 1, "_id": 0}, function(error1, data1){
    //     data1 = _(data1).pluck('jobId');
    //     console.log('data1', data1);
    //     Job.find({"_id": {$in: data1}}, function(error2, data2){
    //       console.log('data2', data2);
    //     });
    //   });
    //   console.log('data', data);
    // })
    // res.end();
  });
};