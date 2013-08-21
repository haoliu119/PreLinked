/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function() {
    this.set('jobTitle', []);
    this.set('jobLocation', "");
    this.set('jobKeywords', []);
  }
});
