if (typeof require !== 'undefined') {
var expect = require('chai').expect;
}

var appRequire = require('../backend/app.js');
var indeedAPI = require('../backend/models/indeed_api.js');
indeedAPI;


describe('truth', function() {
  it('should be truthy', function() {
    var APIQuery = indeedAPI.parseJobQueryForIndeed();
    expect(APIQuery).to.equal(true);
  });
});