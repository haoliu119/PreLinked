/*global PreLinked, $, Backbone*/

window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
    _.extend(PreLinked, Backbone.Events);

    PreLinked.jobQuery = new this.Models.AppModel();
    var app_view = new this.Views.AppView({
      model: PreLinked.jobQuery
    });
  }
};

$(document).ready(function () {
  PreLinked.init();
  $(document).foundation();
});
