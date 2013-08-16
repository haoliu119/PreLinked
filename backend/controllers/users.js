var users = module.exports = {};

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
