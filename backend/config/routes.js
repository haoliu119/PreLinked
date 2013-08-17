// var users = require('../controllers/users.js');
var site = require('../controllers/site.js');
var jobs = require('../controllers/jobs.js');
var passport = require('passport');
var pass = require('../controllers/passport.js');
var passportSess = require('../controllers/passportController.js');

module.exports = function(app) {
  app.get('/serverindex', site.index);
  //Jobs
  app.get('/search', jobs.search);
  //LinkedIn Oauth
  app.get('/auth/linkedin', passport.authenticate('linkedin'), function(req, res) {});
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin',
    { failureRedirect: '/' }), passportSess.setSession);

	// app.post('/user', users.create);
	// app.get('/user', users.list);
	// app.get('/user/:id', users.read);
	// app.put('/user/:id', users.update);
	// app.del('/user/:id', users.delete);
};