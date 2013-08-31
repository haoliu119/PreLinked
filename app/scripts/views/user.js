/*global PreLinked, Backbone, JST*/

PreLinked.Views.UserView = Backbone.View.extend({
  tagName: 'ul',
  className: 'right',

  template: JST['app/scripts/templates/user.hbs'],

  initialize: function(){
    _.bindAll(this, 'render');
    this.fetchUser()
      .done( this.render );
  },

  fetchUser: function(){
    var deferred = $.Deferred();
    var that = this;
    this.model.fetch()
      .done(function(data){
        // console.log('user attributes: ', that.attributes);
        // console.log('fetchUser success with data: ', data);
        deferred.resolve(data);
      })
      .fail(function(error){
        console.log('fetchUser failed');
        deferred.reject('fetchUser failed');
      });
    return deferred.promise();
  },

  saveUser: function(){
    this.model
      .save()
      .done(function(model, response, options){
        console.log('success in saveUser()');
      })
      .fail(function(model, xhr, options){
        console.log('error in saveUser()');
      });
  },

  addSearchHistory: function(){
    var searchHistory = this.model.get('searchHistory');
    // console.log('adding SearchHistory, current history obj: ', searchHistory);
    searchHistory.unshift(_.clone(this.model.jobQuery.attributes));
    if(searchHistory.length > 10){
      this.model.set("searchHistory",_(searchHistory).first(10));
    }
    this.saveUser();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
