/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('body'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {
    this.render();

    PreLinked.appRouter = new PreLinked.Routers.AppRouter();
    Backbone.history.start();
  },

  render: function() {
  	var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({model: homeModel});
    var searchModel = new PreLinked.Models.SearchModel();
    var searchView = new PreLinked.Views.SearchView({model: searchModel});

    this.$el.append(homeView.render().el);
    this.$el.append(searchView.render().el);
    return this;
  }

});
