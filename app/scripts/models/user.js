/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/persons',

  defaults: {
    searchHistory: []
    // inPerson: {}
  },

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
  }
});
