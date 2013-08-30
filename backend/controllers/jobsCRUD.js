var _helper   = require('./_helper.js');
var jobs = require('../controllers/jobs.js');

var jobsCRUD = module.exports = {};

// GET /jobs/search
jobsCRUD.search = function(req, res){
  console.log('- GET /jobs/search - Controller -> IndeedApi.searchConnections >> ');

  req.query.useragent = req.headers['user-agent'];
  req.query.userip = _helper.getClientIp(req);
  /*
  /* Indeed API with Pagination ------------------------
  */

  jobs._grabMultiplePages(req.query)
    .done(
      // Resolved
      function(json) {
        console.log('Paginated JSON Data length',json.length);
        _helper.resolved(req, res, json);
      },
      // Rejected:
      function(error) {
        _helper.rejected(req, res, error);
      }
    );

  // console.log('job results ************', jobResults);

  /*
  /* Indeed API Single Call ------------------------
  */

  // IndeedApi.search(req.query, {}, testCallback)
  //   .done(
  //     //Resolved: json returned from Indeed API
  //     function(json) {
  //       console.log('Length >>>>>>',json.length);
  //       _helper.resolved(req, res, json);
  //     },
  //     //Rejected: error message from Indeed API
  //     function(error) {
  //       _helper.rejected(req, res, error);
  //   });


  /*
  /* Dummy Data ------------------------
  */

  // var fileContent = fs.readFileSync(path.join(__dirname, '../public/_temp_dummy_data/dummy_indeed_search_results.json'), 'utf8');
  // _helper.resolved(req, res, fileContent);

};