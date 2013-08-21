var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');

var linkedin    = module.exports = {};

// GET /people/search
linkedin.searchConnections = function(req, res){
  console.log('GET /people/search - Controller - LinkedIn.searchConnections - req.session >> ', req.session.passport);
  // if user is logged in through LinkedIn
  if (req.session.passport.user){
    LinkedInApi.searchConnections(req)
      .done(
        //Resolved: json returned from LinkedIn API
        function(json) {
          console.log('FULLFILLED !!!!!!!!!!!!!!', typeof json);
          res.set('Content-Type', 'application/json');
          res.send(json);
        },
        //Rejected: error message from LinkedIn API
        function(error) {
          console.log('REJECTED with error >>>>>>> ', error);
          res.send(401, error); //401 Unauthorized
        });
  } else {
    console.log('req.session.passport.user NOT AVAILABLE, need client auth........');
    res.send(307, 'user session.passport is not available'); //307 Temperory Redirect
  }

  // // Dummy Data
  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  // res.set('Content-Type', 'application/json');
  // res.send(fileContent);

};

// GET /people/:id
linkedin.getProfile = function(req, res){
  console.log('-controller-linkedin.getProfile-');
  LinkedInApi.getProfile(req)
    .then(function(json){
      res.json(json);
    });
};

// GET /people/
linkedin.searchFirstDegree = function(req, res){
  console.log('-controller-linkedin.searchFirstDegree-', req.query);
  LinkedInApi.searchFirstDegree(req)
    .then(function(json){
      res.json(json);
    });
};