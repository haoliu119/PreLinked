var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;
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
    consumerKey: '5b03my6m9buq',
    consumerSecret: 'XrTXBuIK6bNVM2HL',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  },
  function(token, tokenSecret, profile, done) {
    process.nextTick(function () {
      console.log('token', token);
      console.log('tokenSecret', tokenSecret);

      UserModel.findOne({ id: profile.id },function(err, users){
        if(err) {throw new Error(err);}
        if(users.id) {
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