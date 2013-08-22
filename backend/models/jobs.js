var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  indeedPost: Schema.Types.Mixed
});

module.exports = mongoose.model('Job', jobSchema);