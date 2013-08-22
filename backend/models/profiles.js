var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  searchHistory: [Schema.Types.Mixed],
  inProfile:      Schema.Types.Mixed,
  firstDegree:   [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Profile', profileSchema);