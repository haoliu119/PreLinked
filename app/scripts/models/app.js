/*global PreLinked, Backbone*/

PreLinked.Models.AppModel = Backbone.Model.extend({

  defaults:{
    jobTitle:     [],
    company:      [],
    jobLocation:  "",
    jobKeywords:  [],
    distance:     25
  },

  initialize: function (){
    this.app_title = 'PreLinked App';

    // TODO: DELETE BEFORE DEPLOYMENT
    this.on('change', this.consoleLogJobQuery);
    // ------------------------------
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