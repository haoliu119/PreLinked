/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user',

  defaults: {
    searchHistory: [],
    inPerson: {}
  },

  initialize: function() {
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
  }
});
