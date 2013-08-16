passport = require('passport'),
pass = require('../controllers/passport.js');

module.exports = function(app){

	var home = require('../controllers/home');
	app.get('/', home.index);
  app.get('/login', home.login);
  app.get('/auth/linkedin', passport.authenticate('linkedin'), function(req, res) {});
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin',
    { failureRedirect: '/login' }), function(req, res) {
      res.redirect('/');
  });
};
