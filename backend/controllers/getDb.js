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

  // var job = new Job({
  //   indeedPost: {key:'value2 really'}
  // });
  // job.save(function(error, data){
  //   if(error){
  //     console.log('Error in saving job:', error);
  //   } else {
  //     console.log('Success in saving job:', data);
  //   }
  // });


  // var keyword = new Keyword({
  //   keyword: 'software'
  // });
  // keyword.save(function(error, data){
  //   if(error){
  //     console.log('Error in saving keyword:', error);
  //   } else {
  //     console.log('Success in saving keyword:', data);
  //   }
  // });

  var keywordToJob = new KeywordToJob({
    keywordId: ObjectId('52159e06958f70e51b000001'),
    jobId: ObjectId('5217d2d307cb164534000013')
  });
  keywordToJob.save(function(error, data){
    if(error){
      console.log('Error in saving keywordToJob:', error);
    } else {
      console.log('Success in saving keywordToJob:', data);
    }
  });

  // Keyword.findOne({"keyword":"software"}, function(error, data){
  //   KeywordToJob.find({"keywordId": data._id}, {"jobId": 1, "_id": 0}, function(error1, data1){
  //     data1 = _(data1).pluck('jobId');
  //     console.log('data1', data1);
  //     Job.find({"_id": {$in: data1}}, function(error2, data2){
  //       console.log('data2', data2);
  //     });
  //   });
  //   console.log('data', data);
  // })
  res.end();

};

db.testKeyword = function(req, res){
  console.log('db.getKeyword\n');
  var query = Job.findOne({
    _id: new ObjectId('5217d2d307cb164534000013')
  });
  query.exec(function(error, data){
    if(error){
      console.log('Error getting data', error);
    } else {
      console.log('Data: ', data);
      data.getKeywords()
        .then(function(dat){
          console.log('Dat in getKeywords', dat);
        });
    }
  });
  res.json('db.getKeyword');
};