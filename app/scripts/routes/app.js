/*global PreLinked, Backbone*/

PreLinked.Routers.AppRouter = Backbone.Router.extend({

  initialize: function(){
    //init user session etc.
  },

  routes: {
    '': 'home',
    'search': 'search'
  },

  home: function() {
    PreLinked.trigger('changePage', {page: 'home'});
    PreLinked.appRouter.navigate('#', { trigger: true});
  },

  search: function() {
    PreLinked.trigger('changePage', {page: 'search'});
    PreLinked.appRouter.navigate('#search', { trigger: true});
  }
});
