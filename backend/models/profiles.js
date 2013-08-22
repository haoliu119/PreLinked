var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  _id: { type: String, unique: true },
  searchHistory: [Schema.Types.Mixed],
  inProfile:      Schema.Types.Mixed,
  firstDegree:   [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Profile', profileSchema);