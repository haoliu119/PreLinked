// var users = require('../controllers/users.js');

var passport = require('passport');
var pass      = require('../controllers/passport.js');

var site      = require('../controllers/site.js');
var jobs      = require('../controllers/jobs.js');
var jobs_controller = require('../controllers/jobs_controller.js');
var linkedin  = require('../controllers/linkedin.js');
var persons   = require('../controllers/persons.js');
var getdb     = require('../controllers/getDb.js');

module.exports = function(app) {
  app.get('/serverindex', site.index);

  //getDb
  app.get('/getdb', getdb.getKeyword);

  //Jobs
  app.get('/jobs', jobs_controller.get);
  app.get('/jobs/search', jobs.search);
  app.get('/jobs/searchSorted', jobs.searchSorted);

  //PreLinked Persons
  app.get('/persons', persons.get);

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

  });
};