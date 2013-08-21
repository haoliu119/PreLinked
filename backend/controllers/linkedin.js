var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');

var linkedin    = module.exports = {};

// GET /people/search
linkedin.searchConnections = function(req, res){
  console.log('-controller-linkedin.searchConnections-', req.session);
  if (req.session.passport.user){
    LinkedInApi.searchConnections(req)
      .done(
        function(json) {
          console.log('FULLFILLED !!!!!!!!!!!!!!');
          res.json(json);
        },
        function(error) {
          console.log('REJECTED >>>>>>> ');
          res.redirect(404,'/');
        });
  } else {
    console.log('REDIRECT!!!!!!!')
    res.redirect('/');
  }

  // Dummy Data
  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_linkedin_connections_search_results.json'), 'utf8');
  // res.json(fileContent);

};

// GET /people/:id
linkedin.getProfile = function(req, res){
  console.log('-controller-linkedin.getProfile-', req.query);
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