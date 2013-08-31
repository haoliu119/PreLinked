if (typeof require !== 'undefined') {
var expect = require('chai').expect;
}

var request = require('request');
var appRequire = require('../backend/app.js');
var indeedAPI = require('../backend/models/indeed_api.js');
var personsCRUD =  require('../backend/controllers/personsCRUD.js');

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

  // describe('', function() {
  //   it('', function() {
  //     request({
  //       method: 'GET',
  //       url: 'localhost:3000'
  //       // qs: _.extend(defaults, query, start) // query properties will override defaults
  //     },function(error, response, body){
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         // body = JSON.stringify(JSON.parse(body).results);
  //         console.log(body);
  //       }
  //     }
  //   });
  // });
