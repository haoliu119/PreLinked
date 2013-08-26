// var users = require('../controllers/users.js');

var passport = require('passport');
var pass      = require('../controllers/passport.js');

var site      = require('../controllers/site.js');
var jobs      = require('../controllers/jobs.js');
var jobsController = require('../controllers/jobs_controller.js');
var linkedin  = require('../controllers/linkedin.js');
var persons   = require('../controllers/persons.js');
var getdb     = require('../controllers/getDb.js');
var users     = require('../controllers/users');

module.exports = function(app) {
  app.get('/serverindex', site.index);

  //getDb
  app.get('/getdb', getdb.testKeyword);

  //Jobs
  app.get('/jobs', jobsController.get);
  app.get('/jobs/search', jobs.search);
  app.get('/jobs/searchSorted', jobs.searchSorted);

  //PreLinked Persons
  // Fetch data from our database
  app.get('/persons/searchRecent', persons.searchRecent);
  app.get('/persons', persons.get);

  //LinkedIn Oauth
  app.get('/auth/linkedin',
    passport.authenticate('linkedin',
      { scope: ['r_fullprofile', 'r_network', 'r_emailaddress', 'r_contactinfo'], state: '12345'  }),
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
  // app.get('/people/search', linkedin.searchConnections);
  // app.get('/people/:id', persons.getById);
  // app.get('/people/', persons.get);

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

  // post user search
  app.post('/user/searches', function(req, res){
    console.log('--->POST /user/searches >>>>>>>>>>>>>>', req.body);

  ////////// begin dummy ///////////
    // var fs   = require('fs');
    // var path = require('path');
    // var json = req.body.searches[0];
    // console.log('json-->', json);
    // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_User_Searches.json'), json);
  ////////// end dummy ///////////

  ////////// begin db save ///////////
    users.userSearch = new users.UserSearch(req.body);

    users.userSearch.save(function(err, results){
      if(err){
        console.log(err);
      } else {
        console.log('Saved successfully', results);
      }
      users.UserSearch.find({}, function(err, data) {
      //console.log('-->', data);
      });
    });
  ////////// end db save ///////////

    res.end();
  });

  //this is where you test random backend functions
  app.get('/test', function(req, res){
    // console.log('- GET /test - app.get(env)', app.get('env'));

    var fs          = require('fs');
    var path        = require('path');

    /**
    /** TESTING LinkedIn API ---------------------------------------------
    /*/

    // GET COMPANIES
    // var LinkedInApi = require('../models/linkedin_api.js'),
    //     _helper     = require('../controllers/_helper.js');

    // LinkedInApi.searchCompanies(req.session)
    //   .done(
    //     //Resolved: json returned from LinkedIn API
    //     function(json) {
    //       fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Companies.json'), json);
    //       _helper.resolved(req, res, json);
    //     },
    //     //Rejected: error message from LinkedIn API
    //     function(error) {
    //       _helper.rejected(req, res, error);
    //   });

    // // GET /people/search
    // // F first, S second, A groups, O out-of-network(third)
    // req.query = {title: 'software engineer', keywords: 'san francisco, ca',  start: '0', facet:  'network,S,A,O' };
    // // var fileName = "_LinkedIn_People_Search_3rd_Degree_P04.json";
    // var fileName = "_temp_test";
    // linkedin.searchConnections(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName), json);
    //       }
    // );

    // GET ALL FIRST DEGREE CONNECTIONS
    // req.query = {start: "500"}; // increment by 500
    // linkedin.searchFirstDegree(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_People_My_First_Degrees_P02.json'), json);
    //       }
    // );

    // // GET ME/1st/2nd/3rd degree FULL PROFILE
    // req.params.id = req.session.passport.user.id; // uncomment for your own profile
    // // req.params.id = "TxTQIGBWTJ"; // uncomment for 1st/2nd/3rd degree profiles

    // linkedin.getProfile(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_ME.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_1st_Degree.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_2nd_Degree.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_3rd_Degree.json'), json);
    //       }
    // );

    /**
    /** TESTING Indeed ---------------------------------------------
    /*/

    // GET /jobs/search
    /*
    l=    '12345'
          'San Francisco, CA'
          // zipcode or city, state

    q=
      space = + / AND'd

      with all word:  <word> <word> <word>

      exact phrase:   "software engineer"

      or / at least one of these words:
          ('high school teacher' or 'plumber')
          (plumber or teacher or engineer or accountant)

      job title:  "title:('elementary school teacher')"
                  "title:('software engineer' or 'software developer')"

      salary: $60,000
              $40K-$90K

      company:

      radius=50

      jt=(fulltime+or+parttime)
    */
    // req.query = {q: "title:('architect' or 'software engineer' or 'developer') company:('google' or 'yahoo' or 'salesforce') $90K-$120K ('big data' or 'plumber')", l: "94105"};
    // var fileName = "_Indeed_Results.json";
    // jobs.search(req, res,
    //   function(json){
    //     fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), json);
    //   }
    // );

  });
};