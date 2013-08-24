/*global PreLinked, Backbone*/

PreLinked.Models.AppModel = Backbone.Model.extend({
  defaults:{
    app_title: 'PreLinked App',
    jobTitle: [],
    company: [],
    jobLocation: "",
    jobKeywords: [],
    distance: 25
  },

  initialize: function(){
    this.jobQuery = {};
  }
});