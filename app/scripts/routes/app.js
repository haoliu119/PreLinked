
PreLinked.Routers.AppRouter = Backbone.Router.extend({

  initialize: function(){
    //init user session etc.
  },

  routes: {
    '': 'home',
    'home': 'home',
    'search': 'search'
  },

  home: function() {
    console.log('-router-home()');
    this.navigate('/home', { trigger: true});
  },

  search: function() {
    console.log('-router-search()');
    this.navigate('/search', { trigger: true});
  }
});
