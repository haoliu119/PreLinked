var UserModel = require('../models/users.js').userModel;
var session = module.exports = {};

session.setSession = function(req, res) {
  console.log('SETSESSION REQ.SESSION ------------- ', req.session)
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
  res.redirect('/#search');
};