/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {
    var that = this;

    this.jobQuery = {};

    this.render();

    PreLinked.appRouter = new PreLinked.Routers.AppRouter();
    PreLinked.appRouter.on('route:home', this.homePage, this);
    PreLinked.appRouter.on('route:search', this.searchPage, this);

    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });
    Backbone.history.loadUrl();

    $(window).on('scroll', function() {
      that.fixedScroll();
    });
  },

  fixedScroll: function() {
    var viewportHt = $(window).height(),
        top = $(window).scrollTop(),
        connHt = $('#connections').height(),
        resultsHt = $('#job-results').height(),
        htCheck = resultsHt > viewportHt;

    if(top > 150) {
      htCheck && $('#connections').addClass('scroll').css('margin-top', top - 130);
      $('#search-filters').css('margin-top', top - 130);
    } else {
      htCheck && $('#connections').removeClass('scroll').css('margin-top', '');
      $('#search-filters').css('margin-top', '');
    }
  },

  homePage: function(){
    console.log('-AppView-homePage');

    var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({
      model: homeModel,
      jobQuery: this.jobQuery
    });

    this.$el.find('#main').empty();
    this.$el.find('#main').append(homeView.render().el);
  },

  searchPage: function(){
    console.log('-AppView-searchPage');
    console.log('jobQuery', this.jobQuery);

    var searchModel = new PreLinked.Models.SearchModel();
    var that = this;
    searchModel
      .fetch()
      .done(function(data){
        var searchView = new PreLinked.Views.SearchView({
          model: data,
          jobQuery: that.jobQuery
        });
        that.$el.find('#main').html(searchView.render().el);
      });

  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //App level
    return this;
  }

});
