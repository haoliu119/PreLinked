/*global PreLinked, $, Backbone*/

window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
    _.extend(PreLinked, Backbone.Events);
    // var view = new this.Views.ConnectionView({
    //   model: new this.Models.ConnectionModel()
    // });
    var app_model = new this.Models.AppModel();
    var app_view = new this.Views.AppView({
      model: app_model
    });

    PreLinked.appRouter = new PreLinked.Routers.AppRouter();

    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });
    Backbone.history.loadUrl();
  }
};

$(document).ready(function () {
  PreLinked.init();
});
