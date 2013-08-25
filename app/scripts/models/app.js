/*global PreLinked, Backbone*/

PreLinked.Models.AppModel = Backbone.Model.extend({

  defaults:{
    app_title:    'PreLinked App',
    jobTitle:     [],
    company:      [],
    jobLocation:  "",
    jobKeywords:  [],
    distance:     25
  },

  // TODO: DELETE BEFORE DEPLOYMENT
  consoleLogJobQuery: function(){
    console.log('[jobTitle] = ',    this.get('jobTitle'));
    console.log('[company] = ',     this.get('company'));
    console.log('"jobLocation" = ', this.get('jobLocation'));
    console.log('[jobKeywords] = ', this.get('jobKeywords'));
    console.log('distance = ',      this.get('distance'));
  }
});