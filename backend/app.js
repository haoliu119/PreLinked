var express = require('express');
var http = require('http');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://nodejitsu:06bd14fda2df534b59f2331f41f66f26@paulo.mongohq.com:10078/nodejitsudb6063054050');

require('./config/middleware.js')(app);
require('./config/environments.js')(app);
require('./config/db.js')(app);
require('./config/routes.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});