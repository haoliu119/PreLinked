var _helper  = require('./_helper.js');
var Person = require('../models/persons.js');
var personsController = require('../controllers/persons.js');

var personsCRUD = module.exports = {};

personsCRUD.get = function(req, res){
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

personsCRUD.put = function(req, res){
  console.log('controller, users.put, req.body, \n', req.body);
  var req_body = req.body;
  delete req_body.jobQuery;
  //the line above is necessary to remove extra properties

  Person._upsert(req_body)
    .done(function(data) {
      console.log('users.put, final step, success.');
      _helper.resolved(req, res, data);
    }, function(error) {
      console.log('users.put, final step, error.');
      _helper.rejected(req, res, error);
    });

};

personsCRUD.post = function(req, res){
  console.log('users.post: ', req.body);

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

personsCRUD.delete = function(req, res){
  res.json('personsCRUD - delete - doing nothing right now');
};