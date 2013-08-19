// var users = require('../controllers/users.js');
var passport = require('passport');

var site = require('../controllers/site.js');
var jobs = require('../controllers/jobs.js');
var linkedin = require('../controllers/linkedin.js');
var pass = require('../controllers/passport.js');
var session = require('../controllers/session.js');

module.exports = function(app) {
  app.get('/serverindex', site.index);
  //Jobs
  app.get('/jobs/search', jobs.search);
  //LinkedIn Oauth
  app.get('/auth/linkedin',
    passport.authenticate('linkedin',
      { scope: ['r_fullprofile', 'r_network'], state: '12345'  }),
      function(req, res) { });

  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {}),
    session.setSession
  );
  // LinkedIn API
  app.get('/people/search', linkedin.search);

	// app.post('/user', users.create);
	// app.get('/user', users.list);
	// app.get('/user/:id', users.read);
	// app.put('/user/:id', users.update);
	// app.del('/user/:id', users.delete);
};