var mongoose = require('mongoose');
var Job = require('../models/jobs.js');

var jobs_controller = module.exports = {};

jobs_controller.get = function(req, res){
  var query = Job.find({});
  query.exec(function(error, jobs){
    console.log('Getting jobs from db\n', jobs);
    res.json('jobs: ', jobs);
  });
};

jobs_controller.post = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('post');
  return deferred.promise;
};

jobs_controller._post = function(input_job){
  var deferred = Q.defer();

  var job = new Job({
    indeedJob: input_job
  });
  job.save(function(error, data){
    if(error){
      console.log('Unable to save to database: ', error);
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
};

jobs_controller.put = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('put');
  return deferred.promise;
};

jobs_controller._put = function(){
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
        $set: {inPerson: data}
        // $addToSet: {firstDegree: myId}
        //todo
        //check for whether it is a first degree or not
      },function(err){
        if(err){
          console.log('ERRRRRRER >>>>>> ',err);
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
};

jobs_controller.delete = function(req, res){
  var deferred = Q.defer();
  deferred.resolve('delete');
  return deferred.promise;
};