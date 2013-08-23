var request = require('request');

var IndeedApi = module.exports = {};

var endPoint = 'http://api.indeed.com/ads/apisearch';
var defaults = {
  publisher: app.get('indeed-id'),
  v:        '2',      // API version
  format:   'json',   // json/xml
  latlong:  '1',      // return geo coordiantes for each result
  filter:   '1',      // filter duplicate results
  sort:     'relevance',
  limit:    '25',
  highlight: '0'
}

// GET /jobs/search
IndeedApi.search = function (query) {
  console.log('- GET /jobs/search - query >> ', query);
  var deferred = Q.defer();
  request({
    method: 'GET',
    url: endPoint,
    qs: _.extend(defaults, query) // query properties will override defaults
    },function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        try {
          var results = JSON.stringify(JSON.parse(body).results);
          deferred.resolve(results);
        } catch (error){
          console.log('- IndeedApi error: ', error, body);
          deferred.reject(body);
        }
      }
  });
  return deferred.promise;
};

/*

http://api.indeed.com/ads/apisearch?publisher=302158985282491&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2

&q=
  with all word: <word> <word> <word>
  exact phrase: "software engineer"
  or: (high school teacher or plumber)
  title:   title:(elementary school teacher)
           title:(elementary school teacher) or title:(high school teacher)

&l= *     // location: zipcode or city, state combo
  l=12345
  l=San+Francisco%2C+CA

&co=us        // default=us. country
&sort=        // default = relevance. Options: relevance / date
&radius=      // default =25. radius from location
&st=          // Site Type: jobsite / employer
&jt=          // Job Type:  fulltime / partime / contract / internship / temporary
&start=       // start result at, default=0
&limit= *     // max number of result per query, default is 10
&fromage= *   // number of days back to search
&highlight=   // default=0, 1 will bold terms in the query
&chnl         // Not Applicable
&userip= *    // client IP number
&useragent= * // User-Agent from client's http requst header

*/