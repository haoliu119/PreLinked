/*global PreLinked, Backbone*/


var dummyPerson = {
  "distance": 1,
  "firstName": "Ross",
  "headline": "Partner at Morris, Manning & Martin, LLP",
  "id": "TxTQIGBWTJ",
  "industry": "Law Practice",
  "lastName": "Albert",
  "location": {"name": "Greater Atlanta Area"},
  "numConnections": 500,
  "numConnectionsCapped": true,
  "pictureUrl": "http://m.c.lnkd.licdn.com/mpr/mprx/0_WTL7mWwitVakUn_IdCvymIUf-0IwMzPIIQArmIoxDV0UQlkwLbz_hwYlplwNV-tFeCFlTuZ1GyRi",
  "positions": {
    "_total": 1,
    "values": [{
      "company": {
        "id": 22650,
        "industry": "Law Practice",
        "name": "Morris, Manning & Martin, LLP",
        "size": "201-500 employees",
        "type": "Partnership"
      },
      "id": 24179756,
      "isCurrent": true,
      "startDate": {
        "month": 9,
        "year": 2001
      },
      "summary": "",
      "title": "Partner"
    }]
  },
  "publicProfileUrl": "http://www.linkedin.com/pub/ross-albert/5/624/3b6",
  "relationToViewer": {"relatedConnections": {
    "_total": 5,
    "values": [
      {
        "firstName": "Daniel",
        "id": "_i1d6eWGUO",
        "lastName": "Phippen"
      },
      {
        "firstName": "Gloria",
        "id": "fDShaY2VUY",
        "lastName": "Bath"
      },
      {
        "firstName": "Vince",
        "id": "WE2iA6QsJ8",
        "lastName": "Wilson"
      },
      {
        "firstName": "Juan",
        "id": "jk_GnFtc9u",
        "lastName": "Morgan"
      },
      {
        "firstName": "Kara",
        "id": "gbs2J2fR9m",
        "lastName": "Kapczynski"
      }
    ]
  }},
  "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=16471866&authType=name&authToken=pvRJ&trk=api*a3139351*s3214061*"}
};

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user',

  defaults: {
    searchHistory: [],
    inPerson: dummyPerson
  },

  initialize: function() {
    this.fetchUser();
  },

  fetchUser: function(){
    // var that = this;
    // this.fetch()
    //   .done(function(){
    //     console.log('user attributes: ', that.attributes);
    //   })
    //   .fail(function(error){
    //     console.log('user session does not exist............');
    //   });
  },

  userLogin: function() {
    return 'userLogin';
  }
});
