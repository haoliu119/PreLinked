var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keywordToProfileSchema = new Schema({
  keywordId: { type: Schema.Types.ObjectId, ref: 'Keyword' },
  profileId: { type: Schema.Types.ObjectId, ref: 'Profile' }
});

module.exports = mongoose.model('KeywordToProfile', keywordToProfileSchema);