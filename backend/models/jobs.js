var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  indeedJob: Schema.Types.Mixed
});

jobSchema.methods.getKeywords = function () {
  var deferred = Q.defer();
  var KeywordToJob = this.model('KeywordToJob');
  var Keyword = this.model('Keyword');
  KeywordToJob.findOne({jobId:this._id}, function(error, data){
    if(error){
      console.log('Db error in getKeywords: ', error);
    } else {
      Keyword.findOne({_id: data.keywordId}, function(err, dat){
        if(err){
          console.log('Db error in getKeywords lv2: ', err);
        } else {
          // console.log('Final keyword: ', dat);
          //return dat
          deferred.resolve(dat);
        }
      });
    }
  });
  return deferred.promise;
};

module.exports = mongoose.model('Job', jobSchema);