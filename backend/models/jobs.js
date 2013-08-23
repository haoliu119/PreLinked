var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  _id: { type: String, unique: true },
  indeedPost: Schema.Types.Mixed
});

module.exports = mongoose.model('Job', jobSchema);