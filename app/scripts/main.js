/*global PreLinked, $*/


window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  PreLinked.init();
});