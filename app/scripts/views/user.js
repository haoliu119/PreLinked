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

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
