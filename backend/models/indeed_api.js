var request = require('request');

var IndeedApi = module.exports = {};

var endPoint = 'http://api.indeed.com/ads/apisearch';

var defaults = {
  publisher: app.get('indeed-id'),
  v:        '2',      // API version
  format:   'json',   // json/xml
  latlong:  '1',      // return geo coordiantes for each result
  filter:   '1',      // filter duplicate results
  sort:     'relevance'
}

IndeedApi.search = function (query, location) {
  request({
    method: 'GET',
    url: endPoint,
    qs: _.extend(defaults,{
      q: query,
      l: location,
      })
    },function(error, response, body){

  });


}

/*

http://api.indeed.com/ads/apisearch?publisher=302158985282491&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2

&q= queries
  exact phrase: "software engineer" as_phr=software+engineer

&l= *     // location: zipcode or city, state combo
  l=12345
  l=San+Francisco%2C+CA

&co=us  // country, default=us

&sort=        // relevance / date ,     default = relevance
&radius=      // radius from location,  default =2 5
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