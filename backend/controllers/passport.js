passport = require('passport'),
LinkedInStrategy = require('passport-linkedin').Strategy,
User = require('../models/Users.js').userModel;

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
      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      console.log(profile);
      return done(null, profile);
    });
  }
));