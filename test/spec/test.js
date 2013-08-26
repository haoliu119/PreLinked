/*global describe, it */
var request = require('request');
// var expect = require('../lib/expect.js').expect;
var expect = require('chai').expect;
//this might NOT work in browser

(function () {

  // describe('Give it some context', function () {
  //   describe('maybe a bit more context here', function () {
  //     it('should run here few assertions', function () {

  //     });
  //   });
  // });

  describe('Visit localhost:3000', function () {
    describe('Is status code 200?', function () {
      it('check status code', function (done) {

        request('http://localhost:3000', function(error, res, body){
          expect(res).to.exist;
          expect(res.statusCode).to.equal(200);

          if(error){
            console.log('error', error);
          }

          done();

        });


      });
    });
  });

})();
