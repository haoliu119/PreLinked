var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// var mongoose = require('mongoose');
var UserModel = require('../models/users.js').userModel;

var pass = module.exports = {};

pass.ser = passport.serializeUser(function(user, done) {
  done(null, user);
});

pass.deser = passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

pass.keys = passport.use(new LinkedInStrategy({
    clientID: app.get('linkedin-key'),
    clientSecret: app.get('linkedin-secret'),
    callbackURL: "/auth/linkedin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);

      UserModel.findOne({ id: profile.id },function(err, users){
        if(err) {throw new Error(err);}
        if(users && users.id) {
        } else {
          var userData = {
            id: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          };

          var user = new UserModel(userData);

          user.save(function (err, user) {
            if (err) throw err;
          });
        }
      });

      return done(null, profile);
    });
  }
));