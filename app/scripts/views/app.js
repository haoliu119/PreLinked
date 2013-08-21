/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {

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

  testModal: function(){
    var Modal = (new PreLinked.Views.PmodalView()).pmodal;
    var modal = new Modal({
      content: "Test content",
      title: 'Test title'
    });
    modal.open();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //App level

    this.testModal();
    return this;
  }

});
