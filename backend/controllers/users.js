var users = module.exports = {};
var mongoose  = require('mongoose');

// save user search
users.schema = new mongoose.Schema({
  jobTitle: Array,
  company: Array,
  jobLocation: String,
  jobKeywords: Array,
  distance: Number
},{
  collection: 'user_searches'
});
users.UserSearch = mongoose.model('user_searches', users.schema);

users.list = function(req, res){
  res.json([
    {
      name: 'User'
  }
 ]);
};

users.create = function(req, res){
  res.json({
    name: 'User'
  });
};

users.read = function(req, res){
  res.json({
    name: 'User'
  });
};

users.update = function(req, res){
  res.json({
    name: 'User'
  });
};

users.delete = function(req, res){
  res.json({
    name: 'User'
  });
};
