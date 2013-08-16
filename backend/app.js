// var express = require('express'),
//   mongoose = require('mongoose'),
//   fs = require('fs'),
//   config = require('./config/config');

// mongoose.connect(config.db);
// var db = mongoose.connection;
// db.on('error', function () {
//   throw new Error('unable to connect to database at ' + config.db);
// });

// var modelsPath = __dirname + '/models';
// fs.readdirSync(modelsPath).forEach(function (file) {
//   if (file.indexOf('.js') >= 0) {
//     require(modelsPath + '/' + file);
//   }
// });

// var app = express();

// require('./config/express')(app, config);
// require('./config/routes')(app);

// console.log('Now running server at http://localhost:3000. Yo!');
// console.log('this is very test ss');
// app.listen(config.port);

var express = require('express');
var app = express();
console.log('starting express server');
app.get('/hello', function(req, res) {
  res.send('hello!');
});
module.exports = app;