var util = module.exports = {};
var passport = require('passport');

//http://stackoverflow.com/questions/14218725/working-with-sessions-in-express-js
util.restrict = function(req, res, next) {
  if (req.session && req.session.passport && req.session.passport.user) {
    next();
  } else {
    console.log('Did NOT pass restrict(). Please check session.');
    req.session.error = 'Access denied!';
    res.send(401, "Access denied");
  }
};

util.badIdea = function(req, res){
  res.json('This is not a good idea.');
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

util.setSession = function(req, res) {
  console.log('- SESSION CONTROLLER SHOULD BE DEPRECATED >>');
  // UserModel.findOne(
  //   { id: req.user.id },
  //   function(err, users){
  //     if(err) {
  //       console.log("error >>>>>> ", err);
  //       res.redirect('/'); // TODO: WHERE IS REDIRECT?
  //     } else {
  //       // req.session.userID = req.user.id;
  //       req.session.passport.user.accessToken = users.accessToken;
  //       res.redirect('/#search');
  //     }
  //   });
  res.redirect(404, '/#home');
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