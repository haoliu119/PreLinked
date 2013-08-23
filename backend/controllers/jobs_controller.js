var mongoose = require('mongoose');
var Job = require('../models/jobs.js');

var jobs_controller = module.exports = {};

jobs_controller.get = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('get');
  res.json('get');
  return deferred.promise;
};

jobs_controller.post = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('post');
  return deferred.promise;
};

jobs_controller.put = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('put');
  return deferred.promise;
};

jobs_controller.delete = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('delete');
  return deferred.promise;
};