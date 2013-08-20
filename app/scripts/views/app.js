/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {
    PreLinked.on('changePage', this.changePage, this);
    this.jobQuery = {};
    this.render();
  },

  changePage: function(data) {
    console.log('info from changePage event: ', data.page);
    var page = data.page + 'Page';
    this[page].call(this);
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
        that.$el.find('#main').empty();
        that.$el.find('#main').append(searchView.render().el);
      });

  },



  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //App level

    return this;
  }

});
