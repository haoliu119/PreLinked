var mongoose    = require('mongoose');
var Person   = require('../models/persons.js');
var personsController = require('./persons.js');
var fs          = require('fs');
var path        = require('path');
var LinkedInApi = require('../models/linkedin_api.js');
var _helper     = require('../controllers/_helper.js');

var testController = module.exports = {};

testController.test = function(req, res){
    console.log('- GET /test - app.get(env)', app.get('env'));

    LinkedInApi.searchFirstDegree(req.session, req.query)
        .done(
            function(json){
                _helper.resolved(req, res, json);
            },
            function(error){
                _helper.rejected(req, res, error);
            });
    /**
    /** TESTING Mongoose ---------------------------------------------
    /*/

    // var oldCollection = [{
    //   "distance": 1,
    //   "firstName": "Jihu",
    //   "headline": "Accounting Associate at CarrierWeb",
    //   "id": "d3bA9zi41M",
    //   "industry": "Logistics and Supply Chain",
    //   "lastName": "A",
    //   "location": {"name": "Greater Atlanta Area"},
    //   "numConnections": 85,
    //   "numConnectionsCapped": false,
    //   "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_UciCe3vuroaitn2bUz-leCF-tdVG-zSbJrcje_92S7a-DlsFcA1m6iCGyXsjl-uwsq3ybXXg65KL",
    //   "publicProfileUrl": "http://www.linkedin.com/pub/jihu-a/60/938/7b7",
    //   "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=217307515&authType=name&authToken=KhfK&trk=api*a3139351*s3214061*"}
    // },
    // {
    //   "distance": 1,
    //   "firstName": "Rachel",
    //   "headline": "Human Resources Manager",
    //   "id": "tkSfbd_HK8",
    //   "industry": "Human Resources",
    //   "lastName": "Adams",
    //   "location": {"name": "Greater Atlanta Area"},
    //   "numConnections": 181,
    //   "numConnectionsCapped": false,
    //   "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_iqpxyYG1RN1VPFkC_9yuyj_OU-cn1CzCTnHhyj-GkciQ26GG7-2P-gQ2vyBWK5qmGcOTPs2ptzQ3",
    //   "positions": {
    //     "_total": 1,
    //     "values": [{
    //       "company": {
    //         "id": 68490,
    //         "industry": "Information Technology and Services",
    //         "name": "IBBS",
    //         "size": "201-500 employees",
    //         "type": "Privately Held"
    //       },
    //       "id": 317693286,
    //       "isCurrent": true,
    //       "startDate": {
    //         "month": 12,
    //         "year": 2011
    //       },
    //       "title": "HR & Payroll Administrator"
    //     }]
    //   },
    //   "publicProfileUrl": "http://www.linkedin.com/in/rachel921",
    //   "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=5398268&authType=name&authToken=ARuV&trk=api*a3139351*s3214061*"}
    // }];


    // var newCollection = [{
    //   "distance": 1,
    //   "firstName": "Jihu",
    //   "headline": "SUPERMAN",
    //   "id": "d3bA9zi41M",
    //   "industry": "KICKING ASS, POSITIONS ADDED",
    //   "lastName": "A",
    //   "location": {"name": "EARTH"},
    //   "numConnections": 85,
    //   "numConnectionsCapped": false,
    //   "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_UciCe3vuroaitn2bUz-leCF-tdVG-zSbJrcje_92S7a-DlsFcA1m6iCGyXsjl-uwsq3ybXXg65KL",
    //   "positions": {
    //     "_total": 1,
    //     "values": [{
    //       "company": {
    //         "id": 73396,
    //         "industry": "Logistics and Supply Chain",
    //         "name": "CarrierWeb",
    //         "size": "51-200 employees",
    //         "type": "Privately Held"
    //       },
    //       "id": 338774692,
    //       "isCurrent": true,
    //       "startDate": {
    //         "month": 5,
    //         "year": 2012
    //       },
    //       "title": "Accounting Associate"
    //     }]
    //   },
    //   "publicProfileUrl": "http://www.linkedin.com/pub/jihu-a/60/938/7b7",
    //   "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=217307515&authType=name&authToken=KhfK&trk=api*a3139351*s3214061*"}
    // },
    // {
    //   "distance": 1,
    //   "firstName": "Rachel",
    //   "headline": "CAT WOMAN",
    //   "id": "tkSfbd_HK8",
    //   "industry": "FIGHING CRIMES, POSITIONS DELETED",
    //   "lastName": "Adams",
    //   "location": {"name": "Greater Atlanta Area"},
    //   "numConnections": 181,
    //   "numConnectionsCapped": false,
    //   "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_iqpxyYG1RN1VPFkC_9yuyj_OU-cn1CzCTnHhyj-GkciQ26GG7-2P-gQ2vyBWK5qmGcOTPs2ptzQ3",
    //   "publicProfileUrl": "http://www.linkedin.com/in/rachel921",
    //   "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=5398268&authType=name&authToken=ARuV&trk=api*a3139351*s3214061*"}
    // },
    // {
    //   "distance": 1,
    //   "firstName": "Derek",
    //   "headline": "I'M TOTALLY NEW!!!!!!!",
    //   "id": "WzuuaZILF_",
    //   "industry": "Nonprofit Organization Management",
    //   "lastName": "Aguirre",
    //   "location": {"name": "Greater Detroit Area"},
    //   "numConnections": 375,
    //   "numConnectionsCapped": false,
    //   "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_bvDvUeGyoQ2XydduL12QUo8xHkHNKEduLcJoUoAmcTpk7aO2IPjMzE586oew1SH8QnfwNS7A0dZZ",
    //   "positions": {
    //     "_total": 1,
    //     "values": [{
    //       "company": {
    //         "industry": "Nonprofit Organization Management",
    //         "name": "Racquet Up Detroit"
    //       },
    //       "id": 116838246,
    //       "isCurrent": true,
    //       "startDate": {"year": 2010},
    //       "summary": "Founding Executive Director of non-profit urban youth development program that will combine squash instruction and competition, academic tutoring and enrichment, community service learning, mentoring, and summer opportunities to support and empower Detroit youth -- program to begin in January 2011.",
    //       "title": "Executive Director"
    //     }]
    //   },
    //   "publicProfileUrl": "http://www.linkedin.com/pub/derek-aguirre/10/875/a42",
    //   "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=37977746&authType=name&authToken=DIBQ&trk=api*a3139351*s3214061*"}
    // }];

    // Person._bulkUpsert(oldCollection);
    // res.end();


    /**
    /** TESTING LinkedIn API ---------------------------------------------
    /*/

    // GET COMPANIES

    // LinkedInApi.searchCompanies(req.session)
    //   .done(
    //     //Resolved: json returned from LinkedIn API
    //     function(json) {
    //       fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Companies.json'), json);
    //       _helper.resolved(req, res, json);
    //     },
    //     //Rejected: error message from LinkedIn API
    //     function(error) {
    //       _helper.rejected(req, res, error);
    //   });

    // // GET /people/search
    // // F first, S second, A groups, O out-of-network(third)
    // req.query = {title: 'software engineer', keywords: 'san francisco, ca',  start: '0', facet:  'network,S,A,O' };
    // // var fileName = "_LinkedIn_People_Search_3rd_Degree_P04.json";
    // var fileName = "_temp_test";
    // linkedin.searchConnections(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName), json);
    //       }
    // );

    // GET ALL FIRST DEGREE CONNECTIONS
    // req.query = {start: "500"}; // increment by 500
    // linkedin.searchFirstDegree(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_People_My_First_Degrees_P02.json'), json);
    //       }
    // );

    // // GET ME/1st/2nd/3rd degree FULL PROFILE
    // req.params.id = req.session.passport.user.id; // uncomment for your own profile
    // // req.params.id = "TxTQIGBWTJ"; // uncomment for 1st/2nd/3rd degree profiles

    // linkedin.getProfile(req, res,
    //       function(json) {
    //         fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_ME.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_1st_Degree.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_2nd_Degree.json'), json);
    //         // fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/_LinkedIn_Profile_Sample_3rd_Degree.json'), json);
    //       }
    // );

    /**
    /** TESTING Indeed ---------------------------------------------
    /*/

    // GET /jobs/search
    /*
    l=    '12345'
          'San Francisco, CA'
          // zipcode or city, state

    q=
      space = + / AND'd

      with all word:  <word> <word> <word>

      exact phrase:   "software engineer"

      or / at least one of these words:
          ('high school teacher' or 'plumber')
          (plumber or teacher or engineer or accountant)

      job title:  "title:('elementary school teacher')"
                  "title:('software engineer' or 'software developer')"

      salary: $60,000
              $40K-$90K

      company:

      radius=50

      jt=(fulltime+or+parttime)
    */
    // req.query = {q: "title:('architect' or 'software engineer' or 'developer') company:('google' or 'yahoo' or 'salesforce') $90K-$120K ('big data' or 'plumber')", l: "94105"};
    // var fileName = "_Indeed_Results.json";
    // jobs.search(req, res,
    //   function(json){
    //     fs.writeFileSync(path.join(__dirname, '../public/_temp_dummy_data/' + fileName ), json);
    //   }
    // );

  };