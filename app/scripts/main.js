/*global PreLinked, $*/

window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
  }
};

_.extend(PreLinked, Backbone.Events);

$(document).ready(function () {
  PreLinked.init();
});
