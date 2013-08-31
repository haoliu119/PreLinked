var request = require('request');

var IndeedApi = module.exports = {};

var endPoint = 'http://api.indeed.com/ads/apisearch',
    defaults = {
      publisher: app.get('indeed-id'),
      v:        '2',      // API version
      format:   'json',   // json/xml
      latlong:  '1',      // return geo coordiantes for each result
      filter:   '1',      // filter duplicate results
      sort:     'relevance',
      limit:    '25', // max limit per page is 25
      highlight: '0'
    };

// GET /jobs/search
// call _search to return paginated array of job results
//    # of results capped either by max or totalResults, a variable in raw data from api
// first api call must be synchronous to get totalResults variable
//    then determine number of remaining api calls and fetch them concurrently/asynchronously
IndeedApi.search = function(query, max){
  var deferred = Q.defer();
  var promises = [];
  max = max || 100;
  query.start = query.start || 0;
  query.limit = query.limit || 25;
  var output = IndeedApi._search(query);
  promises.push(output);
  output.then(
    function(data){
      if (typeof data === 'string'){
        data = JSON.parse(data);
      }
      max = Math.min(max, data.totalResults);
      for(var i = query.limit; i < max; i+=query.limit) {
        _(query).extend({start: i}); //pagination
        var output = IndeedApi._search(query);
        promises.push(output);
      }
      Q.all(promises)
        .then(
          // Resolved
          function(data){
            data = _(data).map(function(item){
              return JSON.parse(item).results;
            });
            data = _(data).flatten(true); //only flatten the first level
            console.log('- GET /jobs/search - total # of jobs >>>', data.length)
            deferred.resolve(JSON.stringify(data));
          },
          // Rejected
          function(error){
            deferred.reject(error);
          }
        );
    },
    function(error){
      deferred.reject(error);
    });

  return deferred.promise;
};

// GET /jobs/search
// Returns JSON raw data from Indeed API
IndeedApi._search = function (query) {
  query = parseJobQueryForIndeed(query);
  query.start = query.start || 0;
  query.limit = query.limit || 25;

  console.log('- GET /jobs/search -> model/IndeedApi.search - parsed query >> ', query);
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
          // try catching error messages returned by API server
          JSON.parse(body).results.length;
          deferred.resolve(body);
        } catch (error){
          deferred.reject(body);
        }
      }
  });
  return deferred.promise;
};

// =============================================
// === Private Helper Functions ===
// =============================================

// ["a", "b", "c d"] ==> "("a" OR "b" OR "c d")"
var orJoinKeywords = function(qArray){
  qArray = _.map(qArray, function(item){
    return JSON.stringify(item);
  });

  var qString = "("+ qArray.join(" OR ") + ")";
  return qString;
};

var parseJobQueryForIndeed = function(query) {
    var q        = {},
        apiQuery = {},
        salary;

    var title     = query.jobTitle,
        company   = query.company,
        keywords  = query.jobKeywords,
        minSalary = query.minSalary,
        maxSalary = query.maxSalary;

    var minSalaryString = '$' + minSalary + ',000';
    var maxSalaryString = '$' + maxSalary + ',000';
    if((minSalary === 'None') && (maxSalary === 'None')) {
        salary = "";
    } else if(minSalary === 'None') {
      salary = '$0,000-' + maxSalaryString;
    } else if(maxSalary === 'None') {
      salary = minSalaryString;
    } else {
      if(parseInt(minSalary) >= parseInt(maxSalary)) {
      salary = minSalaryString;
      } else if(minSalary && maxSalary) {
        salary = minSalaryString + '-' + maxSalaryString;
      } else if(minSalary && !maxSalary) {
        salary = minSalaryString;
      }
    }
    if(title && title.length) {
      q.title = "title:" + orJoinKeywords(title);
    }
    if(company && company.length) {
      q.company = "company:" + orJoinKeywords(company);
    }
    if(keywords && keywords.length) {
      q.keywords = orJoinKeywords(keywords);
    }
    apiQuery.q = _.reduce(q,
      function(memo, value){
        return memo += (" " + value);
      }, "");
    if(salary.length > 0){
      apiQuery.q = apiQuery.q + ' ' + salary;
    }
    apiQuery.l      = query.jobLocation;
    apiQuery.radius = query.distance;
    apiQuery.start  = query.start;
    apiQuery.limit  = query.limit;
    apiQuery.userip = query.userip;
    apiQuery.useragent = query.useragent;
    return apiQuery;
  }

/*

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