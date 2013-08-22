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

persons._post = function(data){
  var deferred = Q.defer();
  var person = new Person({
    _id: data._id,
    inPerson: data
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