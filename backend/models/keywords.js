var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keywordSchema = new Schema({
  keyword: String
});

module.exports = mongoose.model('Keyword', keywordSchema);