var _helper  = require('./_helper.js');
var Person = require('../models/persons.js');
var personsController = require('../controllers/persons.js');

var users = module.exports = {};

users.read = function(req, res){
  // var personsController = require('../controllers/persons.js');
  if (req.session.passport.user){
    // use persons controller _getById to read form DB
    var id = req.params.id ? req.params.id : req.session.passport.user.id;
    personsController._getById(id)
      .done(
        //Resolved: person returned from DB
        function(person) {
          _helper.resolved(req, res, person);
        },
        //Rejected: person not found in DB
        function(error) {
          _helper.rejected(req, res, error);
      });
  }else{
    _helper.sessionNotAvl(req, res);
  }
};

users.put = function(req, res){
  // var personsController = require('../controllers/persons.js');
  console.log('req.params', req.params, '\n req.body', req.body);
  var tempData = req.body;
  delete tempData.jobQuery;
  if (req.session.passport.user){
    var id = req.params.id ? req.params.id : req.session.passport.user.id;
    personsController._put(tempData, id)
      .done(function(data) {
        console.log('users.put, data: ', data);
        _helper.resolved(req, res, data);
      }, function(error) {
        console.log('users.put, error: ', error);
        _helper.rejected(req, res, error);
      });
  } else {
    _helper.sessionNotAvl(req, res);
  }
};

users.post = function(req, res){
  console.log('--->POST /user/searches >>>>>>>>>>>>>>', req.body);

  personsController
    ._post(req.body, req.session.passport.user.id)
    .then(function(data){
      console.log('POST users saved', data);
    })
    .fail(function(data){
      console.log('POST users failed', data);
    });


  ////////// begin dummy ///////////
    // var fs   = require('fs');
    // var path = require('path');
    // var json = req.body.searches[0];
    // console.log('json-->', json);
    // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_User_Searches.json'), json);
  ////////// end dummy ///////////

  ////////// begin db save ///////////


  // personsController
  //   .save({searchHistory: req.body}, function(err, results){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       console.log('Saved successfully', results);
  //     }
  //   });


    // users.userSearch = new users.UserSearch(req.body);

    // users.userSearch.save(function(err, results){
    //   if(err){
    //     console.log(err);
    //   } else {
    //     console.log('Saved successfully', results);
    //   }
    //   users.UserSearch.find({}, function(err, data) {
    //   //console.log('-->', data);
    //   });
    // });
  ////////// end db save ///////////

  // res.end();

};

users.list = function(req, res){
  res.json([
    {
      name: 'User'
  }
 ]);
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
