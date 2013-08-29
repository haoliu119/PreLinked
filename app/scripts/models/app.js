/*global PreLinked, Backbone*/

PreLinked.Models.AppModel = Backbone.Model.extend({

  defaults:{
    jobTitle:     [],
    company:      [],
    jobLocation:  "Mountain View, CA",
    jobKeywords:  [],
    distance:     "25",
    minSalary:    "None",
    maxSalary:    "None"
  },

  initialize: function (){
    this.app_title = 'PreLinked App';
    this.googleAPIurl = "https://maps.googleapis.com/maps/api/geocode/json"

    // TODO: DELETE BEFORE DEPLOYMENT
    // this.on('change', this.consoleLogJobQuery);
    // ------------------------------
  },

  getGoogleGeo: function(latlng){
    var that = this;
    $.ajax({
      type: "GET",
      url: this.googleAPIurl,
      data: {
        sensor: true,
        latlng: latlng
      },
      success: function(response){
        var response = response.results[0];
        if (response !== undefined){
          var location = [];
          _.each(response.address_components, function(component){
            if(component.types.indexOf('locality') >= 0){
              location.unshift(component.long_name);
            }else if(component.types.indexOf('administrative_area_level_1') >= 0){
              location.push(component.short_name);
            }
          });
          location = location.join(', ');
          // console.log(location);
          that.set('jobLocation', location);
          that.trigger('googleGeoSuccess');
        }else{
          that.trigger('googleGeoError');
        }
      },
      error:function(error){
        that.trigger('googleGeoError');
      },
    });
  },

  // TODO: DELETE BEFORE DEPLOYMENT ==============================
  consoleLogJobQuery: function(){
    console.log('APP MODEL changed =====================');
    console.log('jobTitle: ',    this.get('jobTitle'));
    console.log('company: ',     this.get('company'));
    console.log('jobLocation: ', this.get('jobLocation'));
    console.log('jobKeywords: ', this.get('jobKeywords'));
    console.log('distance: ',    this.get('distance'));
    console.log('minSalary: ',   this.get('minSalary'));
    console.log('maxSalary: ',   this.get('maxSalary'));
    console.log('========================================');
  }
  // ========================================================================
});