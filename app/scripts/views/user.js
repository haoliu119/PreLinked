/*global PreLinked, Backbone, JST*/

PreLinked.Views.UserView = Backbone.View.extend({
  tagName: 'ul',
  className: 'right',

  template: JST['app/scripts/templates/user.hbs'],

  initialize: function(){
    this.fetchUser();
  },

  fetchUser: function(){
    var that = this;
    this.model.fetch()
      .done(function(data){
        // console.log('user attributes: ', that.attributes);
        // console.log('user fetch data: ', data);
        that.render();
      })
      .fail(function(error){
        console.log('user session does not exist............');
      });
  },

  addSearchHistory: function(){
    var searchHistory = this.model.get('searchHistory');
    console.log('adding SearchHistory, current history obj: ', searchHistory);
    searchHistory.unshift(_.clone(this.model.jobQuery.attributes));
    // if(searchHistory.length > 10){
    //   searchHistory.pop();
    // }
    this.model.save(null, {
        success: function(model, response, options){
          console.log('success');
        },
        error: function(model, xhr, options){
          console.log('error');
        }
      });
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
