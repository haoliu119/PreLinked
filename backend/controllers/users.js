var users = module.exports = {};
var mongoose  = require('mongoose');

// save user search
users.schema = new mongoose.Schema({
  location: String,
  company: String,
  title: String,
  keywords: String,
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
