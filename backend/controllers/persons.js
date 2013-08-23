var mongoose = require('mongoose');
var Person = require('../models/persons.js');

var persons = module.exports = {};

persons.get = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('get');
  res.json('get');
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
    inPerson: data,
    firstDegree: [myId]
  });
  person.save(function(error, data){
    if(error){
      console.log('Unable to save to database: ', error);
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
      oldPerson.update({
        $set: {inPerson: data},
        $addToSet: {firstDegree: myId}
      },function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Successfully updated\n");
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