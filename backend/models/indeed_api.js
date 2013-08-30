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
IndeedApi.search = function (query, start, testCallback) {
  query = IndeedApi.parseJobQueryForIndeed(query);
  console.log('- GET /jobs/search -> IndeedApi.search - parsedQueryForIndeed >> ', query);
  var deferred = Q.defer();
  request({
    method: 'GET',
    url: endPoint,
    qs: _.extend(defaults, query, start) // query properties will override defaults
    },function(error, response, body){
      if (error) {
        deferred.reject(error);
      } else {
        try {
          if (testCallback){
            testCallback(body);
          }
          body = JSON.stringify(JSON.parse(body).results);
          deferred.resolve(body);
        } catch (error){
          console.log('- IndeedApi error: ', error, body);
          deferred.reject(body);
        }
      }
  });
  return deferred.promise;
};

IndeedApi.parseJobQueryForIndeed = function(query) {
    var tempQuery = {};
    var apiQuery = {};
    var title    = query.jobTitle,
        company  = query.company,
        keywords = query.jobKeywords,
        minSalary = query.minSalary,
        maxSalary = query.maxSalary,
        salary;
    
    var minSalaryString = '$' + minSalary + ',000';
    var maxSalaryString = '$' + maxSalary + ',000';
    if((minSalary === 'None') && (maxSalary === 'None')) {
        salary = '';
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
      tempQuery.title = "title:(";
      for(var i = 0; i < title.length; i++) {
        tempQuery.title += "'" + title[i] + "'";
        if (i !== title.length - 1 ){
          tempQuery.title += " or ";
        }
      }
      tempQuery.title += ")";
    }

    if(company && company.length) {
      tempQuery.company = "company:(";
      for(var i = 0; i < company.length; i++) {
        tempQuery.company += "'" + company[i] + "'";
        if (i !== company.length - 1 ){
          tempQuery.company += " or ";
        }
      }
      tempQuery.company += ")";
    }

    if(keywords && keywords.length) {
      tempQuery.keywords = "(";
      for(var i = 0; i < keywords.length; i++) {
        tempQuery.keywords += "'" + keywords[i] + "'";
        if (i !== keywords.length - 1 ){
          tempQuery.keywords += " or ";
        }
      }
      tempQuery.keywords += ")";
    }

    apiQuery.q = _.reduce(tempQuery,
      function(memo, value){
        return memo += (" " + value);
      }, "");
    apiQuery.q = apiQuery.q + ' ' + salary;
    apiQuery.l      = query.jobLocation;
    apiQuery.radius = query.distance;
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