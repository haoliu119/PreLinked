var passport = require('passport');
var pass      = require('../controllers/passport.js');

var site      = require('../controllers/site.js');
var jobs      = require('../controllers/jobs.js');
var jobsSorted= require('../controllers/jobsSorted.js');
var jobsController = require('../controllers/jobs_controller.js');
var linkedin  = require('../controllers/linkedin.js');
var persons   = require('../controllers/persons.js');
var getdb     = require('../controllers/getDb.js');
var users     = require('../controllers/users.js');

var util      = require('../controllers/util.js');
var testController = require('../controllers/testController.js');

//http://stackoverflow.com/questions/14218725/working-with-sessions-in-express-js
var restrict = function(req, res, next) {
  if (req.session && req.session.passport && req.session.passport.user) {
    next();
  } else {
    console.log('Did NOT pass restrict(). Please check session.');
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
};

module.exports = function(app) {
  app.get('/serverindex', site.index);

  //getDb
  app.get('/getdb', restrict, getdb.testKeyword);

  //test score
  app.get('/testScore', jobsSorted.testScore);

  //Jobs
  app.get('/jobs', jobsController.get);
  // app.get('/jobs/search', jobs.search);
  app.get('/jobs/search', jobsSorted.searchSorted);
  // app.get('/jobs/searchSorted', jobsSorted.searchSorted);

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

  app.get('/logout', util.logout);
  app.get('/session', util.getSession);

  // LinkedIn API
  app.get('/people/search', restrict, linkedin.searchConnections);
  app.get('/people/:id', restrict, linkedin.getProfile);
  app.get('/people/', restrict, linkedin.searchFirstDegree);
  // app.get('/people/search', linkedin.searchConnections);
  // app.get('/people/:id', persons.getById);
  // app.get('/people/', persons.get);

  // Users
  // app.post('/user', users.create);
  // app.get('/user', users.list);
  // app.get('/user/:id', users.read);
  // app.put('/user/:id', users.update);
  // app.del('/user/:id', users.delete);

  // GET /user
  app.get('/user', users.get);
  app.get('/user/:id', users.get);
  app.put('/user', users.put);
  app.put('/user/:id', users.put);
  // post user search
  app.post('/user', users.post);
  app.post('/user/:id', users.post);

  //this is where you test random backend functions
  app.get('/test', testController.test);
};