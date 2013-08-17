/*global PreLinked, $*/


window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
    // var view = new this.Views.ConnectionView({
    //   model: new this.Models.ConnectionModel()
    // });
    var app_model = new this.Models.AppModel();
    var app_view = new this.Views.AppView({
      model: app_model
    });
    app_view.render();
    console.log(app_view);
  }
};

$(document).ready(function () {
  PreLinked.init();
});
