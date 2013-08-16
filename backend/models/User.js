var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = module.exports = {};

userSchema.user = new Schema({
  id: String,
  firstName:  String,
  lastName: String,
});

userSchema.userModel = mongoose.model('User', userSchema.user);