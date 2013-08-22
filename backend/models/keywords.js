var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keywordSchema = module.exports = {};

var keyword = new Schema({
  keyword: String
});

keywordSchema.keywordModel = mongoose.model('keywords', keyword);