var Person   = require('../models/persons.js');
var _helper  = require('./_helper.js');

var persons = module.exports = {};

persons.searchRecent = function(req, res) {
  Person.findOne({_id: req.session.passport.user.id}, function(err, data) {
    if(err) {
      _helper.rejected(req, res, err);
    }else{
      var output = data.inPerson && data.inPerson.searchHistory || [];
      _helper.resolved(req, res, output);
    }
  });
};


persons.getRelated = function(req, res) {
  var IDs = req.query.id;
  console.log('IDS', IDs);
  Person.find({
    '_id': { $in: IDs }
  }, function(err, data){
    if(err){
      _helper.rejected(req, res, err);
    }else{
      _helper.resolved(req, res, data);
    }
  });
};

persons._getById = function(targetId){
  var deferred = Q.defer();

  console.log('---> id', targetId);

  if(targetId){
    var query = Person.findOne({
      _id: targetId
    });
    query.exec(function(error, data){
      if(error){
        // console.log('DB query error in getById: ', error);
        deferred.reject(error);
      } else {
        // console.log('DB query in getById: ', data);
        if (data){
          data = data.inPerson;
          deferred.resolve(data);
        }else{
          deferred.reject('person not in database');
        }
      }
    });
  } else {
    deferred.reject('id not available');
  }

  return deferred.promise;
};

persons._post = function(data, myId){
  var deferred = Q.defer();

  var person = new Person({
    _id: data.id,
    inPerson: data
    // firstDegree: [myId]
  });
  person.save(function(error, data){
    if(error){
      console.log('Unable to save to database: ', error);
      deferred.reject(error);
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
};