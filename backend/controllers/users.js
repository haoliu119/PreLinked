var _helper  = require('./_helper.js');
var Person = require('../models/persons.js');
var personsController = require('../controllers/persons.js');

var users = module.exports = {};

users.read = function(req, res){
  if (req.session.passport.user){
    // use persons controller _getById to read form DB
    var id = req.params.id ? req.params.id : req.session.passport.user.id;
    personsController._getById(id)
      .done(
        //Resolved: person returned from DB
        function(person) {
          _helper.resolved(req, res, person);
        },
        //Rejected: person not found in DB
        function(error) {
          _helper.rejected(req, res, error);
      });
  }else{
    _helper.sessionNotAvl(req, res);
  }
};

users.create = function(req, res){
};

users.list = function(req, res){
  res.json([
    {
      name: 'User'
  }
 ]);
};


users.update = function(req, res){
  res.json({
    name: 'User'
  });
};

users.delete = function(req, res){
  res.json({
    name: 'User'
  });
};
