/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#page'),

  template: JST['app/scripts/templates/app.hbs'],

  render: function() {
    // var model = new Backbone.Model.extend();
    this.$el.append('' + this.model.get('title') );
  }

});
