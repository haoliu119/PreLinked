var util = module.exports = {};
var passport = require('passport');

//http://stackoverflow.com/questions/14218725/working-with-sessions-in-express-js
util.restrict = function(req, res, next) {
  if (req.session && req.session.passport && req.session.passport.user) {
    next();
  } else {
    console.log('Did NOT pass restrict(). Please check session.');
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
};

util.getSession = function(req, res) {
  if(req.session && req.session.passport && req.session.passport.user){
    console.log('- GET /session >> ture, accessToken >> ', req.session.passport.user.accessToken);
    res.json(true);
  } else {
    console.log('- GET /session >> false');
    res.json(false);
  }
};

util.logout = function(req, res) {
  req.session.destroy(function(){
    res.redirect('/');
    // res.send(200, 'You are logged out!');
  });
};

util.authLinkedinPassport = passport.authenticate(
                              'linkedin',
                              {
                                scope: ['r_fullprofile', 'r_network'],
                                state: '12345'
                              }
                            );

util.authLinkedinFunc = function(req, res) {
  //this empty funciton is required by passport
};

util.authLinkedinCallback = passport.authenticate(
                              'linkedin',
                              {
                                successRedirect: '/#search',
                                failureRedirect: '/#home'
                              }
                            );