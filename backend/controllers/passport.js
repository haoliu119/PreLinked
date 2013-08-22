var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var UserModel = require('../models/users.js');

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

      UserModel.findOne({ id: profile.id },function(err, users){
        if(err) {throw new Error(err);}
        if(users && users.id) {
          users.accessToken = accessToken;
          users.save(function(err) {
            if(err) {
              console.log('- /auth/linkedin/callback - user update accessToken - error >> ', err);
            } else {
              console.log('- /auth/linkedin/callback - user update accessToken - success >>');
            }
          });
        } else {
          var userData = {
            id: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            accessToken: accessToken
          };

          var user = new UserModel(userData);
          user.save(function (err, user) {
            if(err) {
              console.log('- /auth/linkedin/callback - user.save - error >> ', err);
            } else {
              console.log('- /auth/linkedin/callback - user.save - success >>');
            }
          });
        }
      });
    profile.accessToken = accessToken;
    console.log('-  /auth/linkedin/callback - profile (session.passport.user) >> ', profile);
    return done(null, profile);
    });
  }
));