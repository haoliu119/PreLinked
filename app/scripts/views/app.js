/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('body'),

  //template: JST['app/scripts/templates/app.hbs'],
  template: Handlebars.compile($("#template-app").html()),

  initialize: function() {
    PreLinked.on('home', this.home);
    PreLinked.on('search', this.search);
    var appRouter = new PreLinked.Routers.AppRouter();
    Backbone.history.start({pushState: true});
  },

  home: function() {
    console.log('home');
  },

  search: function() {
    console.log('search');
  },

  render: function() {
  	var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({model: homeModel});
    this.$el.prepend( homeView.render().el );
    return this;
  }

});
