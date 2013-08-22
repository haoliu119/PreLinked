var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  keyword: String
});

module.exports = mongoose.model('Company', companySchema);