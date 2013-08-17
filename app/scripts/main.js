/*global PreLinked, $*/


window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
    new this.Views.ConnectionView({
      model: new this.Models.ConnectionModel()
    });
  }
};

$(document).ready(function () {
  PreLinked.init();
});
