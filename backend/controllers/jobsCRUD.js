var _helper   = require('./_helper.js');
var IndeedApi = require('../models/indeed_api.js');

var jobsCRUD = module.exports = {};

// Not used yet, saved for future feature
// get company IDs from Linkedin company search, pass IDs into people/search facets
var _extractCompanies = function(data){
  if(typeof data === 'string'){
    data = JSON.parse(data);
  }
  var companies = {};
  _(data).each(function(item){
    if(item.company){
      var company = item.company;
      companies[company] = companies[company] ? companies[company] + 1 : 1;
    }
  });
  companies = _.pairs(companies);
  return companies.sort(function(c1, c2){
    return c2[1] - c1[1];
  });
};

// GET /jobs/search
jobsCRUD.search = function(req, res){
  console.log('- GET /jobs/search - Controller -> IndeedApi.searchConnections >> ');

  req.query.useragent = req.headers['user-agent'];
  req.query.userip = _helper.getClientIp(req);
  /*
  /* Indeed API with Pagination ------------------------
  */

  IndeedApi.search(req.query, 100) // max 100 results
    .done(
      // Resolved
      function(json) {
        console.log('Paginated JSON Data length',json.length);
        // not used yet, save for future feature
        // console.log("-- company name list >> ",_extractCompanies(json));
        _helper.resolved(req, res, json);
      },
      // Rejected:
      function(error) {
        _helper.rejected(req, res, error);
      }
    );

  /*
  /* Dummy Data ------------------------
  */

  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  // _helper.resolved(req, res, fileContent);
};