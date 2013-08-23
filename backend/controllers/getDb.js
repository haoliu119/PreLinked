var db = module.exports = {};
var Job = require('../models/jobs.js');
var Keyword = require('../models/keywords.js');
var KeywordToJob = require('../models/keywordsToJobs.js');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

db.setup = function(req, res){
  /**
  /** TESTING MongoDB
  /*/

  var job = new Job({
    indeedPost: {key:'value2 really'}
  });
  job.save(function(error, data){
    if(error){
      console.log('Error in saving job:', error);
    } else {
      console.log('Success in saving job:', data);
    }
  });


  var keyword = new Keyword({
    keyword: 'software'
  });
  keyword.save(function(error, data){
    if(error){
      console.log('Error in saving keyword:', error);
    } else {
      console.log('Success in saving keyword:', data);
    }
  });

  var keywordToJob = new KeywordToJob({
    keywordId: mongoose.Types.ObjectId('52159e06958f70e51b000001'),
    jobId: mongoose.Types.ObjectId('5215a3522dfd9f1e1c000001')
  });
  keywordToJob.save(function(error, data){
    if(error){
      console.log('Error in saving keywordToJob:', error);
    } else {
      console.log('Success in saving keywordToJob:', data);
    }
  });

  Keyword.findOne({"keyword":"software"}, function(error, data){
    KeywordToJob.find({"keywordId": data._id}, {"jobId": 1, "_id": 0}, function(error1, data1){
      data1 = _(data1).pluck('jobId');
      console.log('data1', data1);
      Job.find({"_id": {$in: data1}}, function(error2, data2){
        console.log('data2', data2);
      });
    });
    console.log('data', data);
  })
  res.end();

};

db.getKeyword = function(req, res){
  console.log('db.getKeyword\n');
  //{_id:new ObjectId('52159c36a8c904d21b000001')} is not working
  //no idea why
  Job.find({}, function(error, data){
    if(error){
      console.log('Error getting data', error);
    } else {
      console.log('Data: ', data);
    }
  });
  res.json('db.getKeyword');
};