// require db module
var mongoose = require('mongoose');

module.exports = function(app) {
  // Connect to db here using app.get('db-uri')
  mongoose.connect( app.get('db-uri') );

  // Setup models
  // require('../models/User.js')(app);
};
