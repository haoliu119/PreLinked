/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user',

  defaults: {
    searchHistory: []
  },

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.fetchUser();
  },

  fetchUser: function(){
    var that = this;
    this.fetch()
      .done(function(){
        console.log('user attributes: ', that.attributes);
      })
      .fail(function(error){
        console.log('user session does not exist............');
      });
  },

  addSearchHistory: function(){
    var searchHistory = this.get('searchHistory');
    searchHistory.unshift(this.jobQuery.attributes.slice());
    if(searchHistory.length > 10){
      searchHistory.pop();
    }
  }
});