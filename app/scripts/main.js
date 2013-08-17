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
    var view = new this.Views.AppView();
    view.render();
    console.log(view);
  }
};

$(document).ready(function () {
  PreLinked.init();
});
