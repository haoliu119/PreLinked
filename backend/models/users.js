var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: { type: String, unique: true },
  firstName:  { type: String },
  lastName: { type: String },
  accessToken: { type: String }
});

module.exports = mongoose.model('User', userSchema);