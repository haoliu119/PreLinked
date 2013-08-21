var _helper = module.exports = {};

_helper.sessionNotAvl = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Session Not Available - need to redirect to /auth/linkedin <<');
  res.send(307, 'user session.passport is not available'); //307 Temperory Redirect
};

_helper.resolved = function(req, res, json){
  console.log('- '+ req.method + ' ' + req.url + ' - Resolved <<');
  res.set('Content-Type', 'application/json');
  res.send(json);
};

_helper.rejected = function(req, res, error){
  console.log('- '+ req.method + ' ' + req.url + ' - Rejected - error << ', error);
  res.send(401, error); //401 Unauthorized
};