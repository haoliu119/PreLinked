var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = module.exports = {};

var job = new Schema({
  indeedPost:      Schema.Types.Mixed
});

jobSchema.jobModel = mongoose.model('jobs', job);