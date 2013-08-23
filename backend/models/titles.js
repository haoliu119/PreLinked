var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var titleSchema = new Schema({
  keyword: String
});

module.exports = mongoose.model('Title', titleSchema);