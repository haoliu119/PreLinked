/*global PreLinked, Backbone*/

PreLinked.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'home',
    'search': 'search'
  },

  home: function() {
    PreLinked.trigger('home');
  },

  search: function() {
    PreLinked.trigger('search');
  }
});
