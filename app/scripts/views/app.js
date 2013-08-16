/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({

  template: JST['app/scripts/templates/app.hbs'],

  render: function() {
    this.$el.append();
  }  

});
