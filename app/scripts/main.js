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

$(document).ready(function () {
  PreLinked.init();
});