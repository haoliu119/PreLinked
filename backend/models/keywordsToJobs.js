var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keywordToJobSchema = new Schema({
  keywordId: { type: Schema.Types.ObjectId, ref: 'Keyword' },
  jobId:     { type: Schema.Types.ObjectId, ref: 'Job' }
});

module.exports = mongoose.model('KeywordToJob', keywordToJobSchema);