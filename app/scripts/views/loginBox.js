/*global PreLinked, Backbone, JST*/

PreLinked.Views.LoginboxView = Backbone.View.extend({

  template: JST['app/scripts/templates/loginBox.hbs'],

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html( this.template({
      checkLogin: true
    }) );
    return this;
  }

});
