if (typeof require !== 'undefined') {
var expect = require('chai').expect;
}

var request = require('request');
var appRequire = require('../backend/app.js');
var indeedAPI = require('../backend/models/indeed_api.js');
var persons =  require('../backend/controllers/persons.js');

describe('query data', function() {
  var query;
  beforeEach(function() {
    query = {
      jobTitle: [ 'software engineer' ],
      company: ['Google'],
      jobLocation: 'Mountain View, CA',
      jobKeywords: [ 'javascript' ],
      distance: '25',
      minSalary: 'None',
      maxSalary: 'None'
    };
  });

  describe('parse indeed job query', function() {
    it('should assign location to the "l" property', function() {
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.l).to.equal('Mountain View, CA');
    });

    it('should assign distance to the "radius" property', function() {
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.radius).to.equal('25');
    });

    it('should assign jobTitle to the "q" property', function() {
      query.company = undefined;
      query.jobKeywords = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' title:(\'software engineer\') ');
    });

    it('should assign multiple jobTitles to the "q" property', function() {
      query.jobTitle.push('web developer');
      query.company = undefined;
      query.jobKeywords = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' title:(\'software engineer\' or \'web developer\') ');
    });

    it('should assign company to the "q" property', function() {
      query.jobTitle = undefined;
      query.jobKeywords = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' company:(\'Google\') ');
    });

    it('should assign multiple companies to the "q" property', function() {
      query.company.push('Twitter');
      query.jobTitle = undefined;
      query.jobKeywords = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' company:(\'Google\' or \'Twitter\') ');
    });

    it('should assign a keyword to the "q" property', function() {
      query.jobTitle = undefined;
      query.company = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' (\'javascript\') ');
    });

    it('should assign a keyword to the "q" property', function() {
      query.jobKeywords.push('ruby');
      query.jobTitle = undefined;
      query.company = undefined;
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      expect(APIQuery.q).to.equal(' (\'javascript\' or \'ruby\') ');
    });

    it('should create a full query (without salaries)', function() {
      var APIQuery = indeedAPI.parseJobQueryForIndeed(query);
      
      var expectedQueryObject = {
        q: ' title:(\'software engineer\') company:(\'Google\') (\'javascript\') ',
        l: 'Mountain View, CA',
        radius: '25'
      };

      expect(JSON.stringify(APIQuery)).to.equal(JSON.stringify(expectedQueryObject));
    });
  });
});

describe('should retrieve user from database', function() {

  beforeEach(function() {
  });
  
  var res;
  var req = {
    params: {
      id: 'GLgKsKoL1H'
    },
    session: {
      passport: {
        user: 'something'
      }
    }
  };

  // describe('', function() {
  //   var j = request.jar()
  //   var cookie = request.cookie('_sio=42f8d1fe799db20f----demo_user; connect.sid=s%3AzNNlgHvG7WArMa4Mj17vQZsS.MP8Q8GgeI%2FuJmdKs%2F47Clf8%2BRlCMCbr8cHlEXDJDr4E; ajs_user_id=%22demo_user%22; mp_PreLinked=%7B%22distinct_id%22%3A%20%22demo_user%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22mp_name_tag%22%3A%20%22demo%40prelinked.com%22%2C%22%24email%22%3A%20%22demo%40prelinked.com%22%7D');
  //   j.add(cookie);
  //   // request({url: 'http://www.google.com', jar: j}, function () {
  //   //   request('http://images.google.com')
  //   // })

  //   it('', function(done) {
  //     var testPersonsRoute = function() {
  //       var deferred = Q.defer();
  //       request({
  //         method: 'GET',
  //         jar: j,
  //         url: 'http://localhost:3000/persons/GLgKsKoL1H'
  //         // qs: _.extend(defaults, query, start) // query properties will override defaults
  //       },function(error, res, body){
  //         if (error) {
  //           console.log('ERROR >>>', error);
  //           deferred.reject(error);
  //         } else {
  //           // body = JSON.stringify(JSON.parse(body).results);
  //           // console.log('should be the res.req', res.req);
  //           console.log('should be the body', body);
  //           deferred.resolve(body);
  //         }

  //         // request({
  //         //   method: 'GET',
  //         //   jar: j,
  //         //   url: 'http://localhost:3000/session'
  //         // },function(err, res, bod){
  //         //   console.log('err');
  //         //   console.log('res');
  //         //   console.log('bod', bod);
  //         //   console.log('cookie', j);
  //         // });

  //       });
  //       return deferred.promise;
  //     };
  //     testPersonsRoute().done(function(data) {
  //       console.log('data', data);
  //       done();

  //     });
  //     // expect(body).to.equal('something');
  //   });
  // });

  it('should retrieve user with a last name of "Portanova" from the database', function(done) {
    var retrieveUser = persons._getById('GLgKsKoL1H');
    retrieveUser.done(function(data) {
      console.log(data);
      expect(data.lastName).to.equal('Portanova');
      done();
    });
  });


});