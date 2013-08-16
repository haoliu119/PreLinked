var path = require('path');
var express = require('express');
var hbs = require('hbs');
var fs = require('fs'); // FOR HBS PARTIALS HELPER

module.exports = function(app) {
  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'hbs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  // NOT SURE IF THIS IS THE RIGHT LOCATION FOR HSB HELPER FUNCTIONS
  //-------------------------------------
  var blocks = {};

  hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
      block = blocks[name] = [];
    }
    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
  });

  hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');
    // clear the block
    blocks[name] = [];
    return val;
  });

  // hbs.registerPartial('partial', fs.readFileSync(path.join(__dirname, '../views/partial.hbs', 'utf8')));
  // hbs.registerPartials(path.join(__dirname,'../views/partials'));
  //------------------------------------

};
