if (typeof require !== 'undefined') {
  // Include the assertion library
  var expect = require('chai').expect;

  // Include the that contains the code to test
  var _ = require('./underbar.js');
}

// Create describe blocks for each component
describe('each', function() {
  // Create id blocks for each test
  it('should iterate over properties of objects', function() {
    var obj = {
      cow: 'cow_value',
      sheep: 'sheep_value'
    };

    // Run your function
    _.each(obj, function(value, key, list) {
      // Finally, test that the behavior is correct
      expect(value).to.equal(key+'_value');
      expect(list).to.equal(obj);
    });
  });
});