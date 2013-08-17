var passContr = module.exports = {};

passContr.setSession = function(req, res) {
  req.session.userID = req.user.id;
  res.redirect('/');
};