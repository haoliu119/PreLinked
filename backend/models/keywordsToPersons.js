var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keywordToPersonSchema = new Schema({
  keywordId: { type: Schema.Types.ObjectId, ref: 'Keyword' },
  personId: { type: Schema.Types.ObjectId, ref: 'Person' }
});

module.exports = mongoose.model('KeywordToPerson', keywordToPersonSchema);