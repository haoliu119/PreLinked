var util = module.exports = {};

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