/*global PreLinked, Backbone*/

PreLinked.Routers.ApprouterRouter = Backbone.Router.extend({
  routes: {
    '/': 'home',
    'browser': browse
  },

  home: function() {
    console.log('home');
  },

  browser: function() {
    console.log('browse');
  }
});
