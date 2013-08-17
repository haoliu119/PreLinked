/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#page'),

  template: JST['app/scripts/templates/app.hbs'],

  render: function() {
    this.$el.append( this.template(this.model.attributes) );
  }

});
