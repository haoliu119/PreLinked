var _helper = module.exports = {};

_helper.sessionNotAvl = function(req, res){
  console.log('- '+ req.method + ' ' + req.url + ' - Session Not Available - need to redirect to /auth/linkedin <<');
  res.send(307, 'user session.passport is not available'); //307 Temperory Redirect
};

_helper.resolved = function(req, res, json){
  console.log('- '+ req.method + ' ' + req.url + ' - Resolved <<');
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  if(typeof json !== 'string'){
    json = JSON.stringify(json);
  }

  res.write(json);
  res.end();
};

_helper.rejected = function(req, res, error){
  console.log('- '+ req.method + ' ' + req.url + ' - Rejected - error << ', error);
  res.send(401, error); //401 Unauthorized
};