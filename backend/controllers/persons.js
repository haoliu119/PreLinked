var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Person   = require('../models/persons.js');
var _helper  = require('./_helper.js');
var LinkedInApi = require('../models/linkedin_api.js');
var users     = require('../controllers/users'); // TODO: refactor this later into Person

var persons = module.exports = {};

persons.searchRecent = function(req, res) {
  if (req.session.passport.user){
    Person.findOne({_id: req.session.passport.user.id}, function(err, data) {
      if(err) {
        console.log('err---->', err);
      }
      _helper.resolved(req, res, data.searchHistory);
    });
  } else {
    _helper.sessionNotAvl(req, res);
  }
};

persons.get = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('get');
  res.json('get');
  return deferred.promise;
};

persons.getLinkedin = function(req, res){
  var id = req.session.passport.user.id;
  LinkedInApi.getProfile(req.session, id)
    .done(
      //Resolved: json returned from LinkedIn API
      function(json) {
        // save it to DB
        if(typeof json === "string"){
          json = JSON.parse(json);
        }
        persons._put(json, id)
          .done(
            function(data){
              console.log('person successfully saved to DB');
              res.redirect('/#search');
            },
            function(error){
              console.log('person NOT saved to DB, error >>>', error);
              res.redirect('/#search');
            });
      },
      //Rejected: error message from LinkedIn API
      function(error) {
        console.log('linkedin did not return profile, error >>>', error);
        res.redirect('/#search');
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

persons.post = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('post');
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

persons._put = function(data, myId){
  var deferred = Q.defer();

  var query = Person.findOne({_id: data.id});
  query.exec(function(error, oldPerson){
    if(error){
      console.log('Unable to find person?\n', error);
      deferred.reject(error);
      return deferred.promise;
    }

    if(oldPerson){
      //update the person
      console.log('Find the oldPerson\n');
      console.log(oldPerson);
      oldPerson.update({
        $set: {inPerson: data}
        // $addToSet: {firstDegree: myId}
        //todo
        //check for whether it is a first degree or not
      },function(err){
        if(err){
          console.log(err);
          deferred.reject(err);
        }else{
          console.log("Successfully updated\n");
          console.log(oldPerson);
          deferred.resolve(oldPerson);
        }
      });

    } else {
      //save as a new person
      console.log('Save a new Person\n');
      persons._post(data, myId)
        .then(function(data){
          deferred.resolve(data);
        });
    }
  });

  return deferred.promise;
};

persons.put = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('put');
  return deferred.promise;
};

persons.delete = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('delete');
  return deferred.promise;
};