/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/persons',

  defaults: {
    searchHistory: []
    // inPerson: {}
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
  }
});
