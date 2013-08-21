// var users = require('../controllers/users.js');
// var session   = require('../controllers/session.js');
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
      res.redirect('/#home');
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
    console.log('session:', req.session);
    if(req.session && req.session.passport && req.session.passport.user){
      res.json(true);
    } else {
      res.json(false);
    }
  });

  app.get('/logout', function(req, res) {
    req.session.destroy(function(){
      res.redirect('/');
    });
  });

  app.get('/test', function(req, res){
    //this is where you test random backend functions
    console.log('app.get(env)', app.get('env'));
    res.end();
  });
};