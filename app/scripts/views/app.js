/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('body'),

  //template: JST['app/scripts/templates/app.hbs'],
  template: Handlebars.compile($("#template-app").html()),

  tmpl: '1234',

  render: function() {
  	var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({model: homeModel});
    this.$el.prepend( homeView.render().el );
    return this;
  }

});
