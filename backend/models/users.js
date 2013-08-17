var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = module.exports = {};

var user = new Schema({
  id: { type: String, unique: true },
  firstName:  { type: String },
  lastName: { type: String },
});

userSchema.userModel = mongoose.model('users', user);