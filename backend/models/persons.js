var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  _id: { type: String, unique: true }, // use LinkedIn ID
  searchHistory: [Schema.Types.Mixed],
  inPerson:      Schema.Types.Mixed,
  firstDegree:   [Schema.Types.ObjectId],
  secondDegree:  [Schema.Types.ObjectId],
  thirdDegree:   [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Person', personSchema);