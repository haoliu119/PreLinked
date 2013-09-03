var express = require('express');

module.exports = function(app) {
  // comment out logic for checking environments

  var envObj = process.env;

  var setupDev = function(app){
    //mongodb
    app.set('db-uri', envObj.p_db_uri);
    //indeed.com
    app.set('indeed-id', envObj.p_indeed_id);
    //linkedin
    app.set('linkedin-key', envObj.p_linkedin_key);
    app.set('linkedin-secret', envObj.p_linkedin_secret);
    app.set('linkedin-oauth-token', envObj.p_linkedin_oauth_token);
    app.set('linkedin-oauth-secret', envObj.p_linkedin_oauth_secret);
    // Google Maps
    app.set('google-key', envObj.p_google_key);
    //utility
    app.use(express.errorHandler());
    //analytics
    analytics.init({secret: envObj.p_analytics_secret });
  };

  // development only
  if (app.get('env') === 'development') {
    setupDev(app);
  }

  if (app.get('env') === 'production') {
    setupDev(app);
  }

};