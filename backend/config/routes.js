require('../controllers/passport.js');  //necessary to init passport?

var site      = require('../controllers/site.js');
var jobsCRUD      = require('../controllers/jobsCRUD.js');
var jobsSorted= require('../controllers/jobsSorted.js');
var jobsController = require('../controllers/jobs_controller.js');
var linkedin  = require('../controllers/linkedin.js');
var persons   = require('../controllers/persons.js');
var getdb     = require('../controllers/getDb.js');
var personsCRUD = require('../controllers/personsCRUD.js');

var util      = require('../controllers/util.js');
var restrict  = util.restrict;

var testController = require('../controllers/testController.js');

module.exports = function(app) {
  app.get('/serverindex', site.index);


  //Jobs
  app.get('/jobs', jobsController.get);
  app.get('/jobs/search', jobsCRUD.search);
  // app.get('/jobs/search', jobsSorted.searchSorted);

  // Persons: data from our database
  app.get('/persons/searchRecent', restrict, persons.searchRecent);
  app.get('/persons/related', persons.getRelated);

  //LinkedIn Oauth
  app.get('/auth/linkedin', util.authLinkedinPassport, util.authLinkedinFunc );
  app.get('/auth/linkedin/callback', util.authLinkedinCallback);

  // User Session
  app.get('/logout', util.logout);
  app.get('/session', util.getSession);

  // LinkedIn API
  app.get('/people/search', restrict, linkedin.searchConnections);
  app.get('/people/:id', restrict, linkedin.getProfile);
  app.get('/people', restrict, linkedin.searchFirstDegree);

  // /user
  app.get('/user', personsCRUD.get);
  app.get('/user/:id', personsCRUD.get);
  app.put('/user', personsCRUD.put);  //this should NOT be allowed too
  app.put('/user/:id', personsCRUD.put);
  app.post('/user', personsCRUD.post);
  app.post('/user/:id', personsCRUD.post);
  app.del('/user', util.badIdea);
  app.del('/user/:id', personsCRUD.delete);

  //getDb
  // app.get('/getdb', restrict, getdb.testKeyword);
  // app.get('/savetodb', restrict, persons.getLinkedin);
  //test score
  app.get('/testScore', jobsSorted.testScore);

  //this is where you test random backend functions
  app.get('/test', testController.test);
};