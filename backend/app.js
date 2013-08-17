var express = require('express');
var http = require('http');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/preLinked');

require('./config/middleware.js')(app);
require('./config/environments.js')(app);
require('./config/db.js')(app);
require('./config/routes.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});