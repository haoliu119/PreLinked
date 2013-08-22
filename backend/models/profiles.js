var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = module.exports = {};

var profile = new Schema({
  searchHistory: [Schema.Types.Mixed],
  inProfile:      Schema.Types.Mixed,
  firstDegree:   [Schema.Types.ObjectId]
});

profileSchema.profileModel = mongoose.model('profiles', profile);