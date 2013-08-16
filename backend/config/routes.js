// var users = require('../controllers/users.js');
var site = require('../controllers/site.js');
var passport = require('passport');
var pass = require('../controllers/passport.js');

module.exports = function(app) {
  app.get('/', site.index);
  app.get('/auth/linkedin', passport.authenticate('linkedin'), function(req, res) {});
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin',
    { failureRedirect: '/login' }), function(req, res) {
      res.redirect('/');
  });
	// app.post('/user', users.create);
	// app.get('/user', users.list);
	// app.get('/user/:id', users.read);
	// app.put('/user/:id', users.update);
	// app.del('/user/:id', users.delete);
};