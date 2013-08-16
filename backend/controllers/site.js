var site = module.exports = {};

site.index = function(req, res){
  res.render('index', { title: "Welcome to PreLinked" });
};