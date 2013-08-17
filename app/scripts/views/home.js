/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({

  template: JST['app/scripts/templates/home.hbs'],

  initialize: function() {
    PreLinked.on('home', this.home);
    PreLinked.on('search', this.search);
  },

  events: {
    'submit form': 'submitSearch'
  },

  home: function() {
    console.log('home');
  },

  search: function(e) {
    console.log('search');
    PreLinked.appRouter.navigate('/search');
  },

  submitSearch: function(e) {
    e.preventDefault();
    
    $.ajax({
      type: 'GET',
      url: 'jobs/search',
      dataType: 'json',
      data: {}
    }).done(function( data ) {
      console.log(data);
      PreLinked.trigger('search');
    });
  },

  render: function() {
    var homeModel = new PreLinked.Models.HomeModel();
    this.$el.html(this.template);

    return this;
  }

});
