/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({

  //template: JST['app/scripts/templates/home.hbs'],
  template: Handlebars.compile($("#template-home").html()),

  events: {
    'submit': 'doSearch'
  },

  initialize: function() {
    PreLinked.on('home', this.home);
    PreLinked.on('search', this.search);
  },

  home: function() {
    console.log('home');
  },

  search: function() {
    console.log('search');
    PreLinked.appRouter.navigate('/search');
  },

  doSearch: function(e) {
    e.preventDefault();
    console.log('doSearch');
    PreLinked.trigger('search');
  },

  render: function() {
    var homeModel = new PreLinked.Models.HomeModel();
    this.$el.html(this.template);

    return this;
  }

});
