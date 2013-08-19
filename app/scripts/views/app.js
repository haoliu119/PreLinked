/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {
    PreLinked.on('changePage', this.changePage, this);
    this.render();
  },

  changePage: function(data) {
    console.log(data.page);
    var page = data.page + 'Page';
    this[page].call(this);
  },

  searchPage: function(){
    console.log('-AppView-searchPage');

    var searchModel = new PreLinked.Models.SearchModel();
    var that = this;
    searchModel
      .fetch()
      .done(function(data){
        var searchView = new PreLinked.Views.SearchView({
          model: data
        });
        that.$el.append(searchView.render().el);
      });
  },

  homePage: function(){
    console.log('-AppView-homePage');

    var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({
      model: homeModel
    });
    this.$el.append(homeView.render().el);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //App level

    return this;
  }

});
