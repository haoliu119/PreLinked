/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({

  template: JST['app/scripts/templates/home.hbs'],

  render: function() {
  	this.$el.append();
  }

});
