var UserModel = require('../models/users.js').userModel;
var session = module.exports = {};

session.setSession = function(req, res) {
  UserModel.findOne(
    { id: req.user.id },
    function(err, users){
      if(err) {
        throw new Error(err);
      } else {
        req.session.userID = req.user.id;
        req.session.accessToken = users.accessToken;
      }
    })
  res.redirect('/#search');
};