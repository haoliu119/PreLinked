var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  indeedJob: Schema.Types.Mixed
});

jobSchema.methods.getKeywords = function (callback) {
  var KeywordToJob = this.model('KeywordToJob');
  return KeywordToJob.find({jobId:this._id}, callback);
};

module.exports = mongoose.model('Job', jobSchema);