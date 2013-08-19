/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //App level

    var homeModel = new PreLinked.Models.HomeModel();
    var homeView = new PreLinked.Views.HomeView({
      model: homeModel
    });
    this.$el.append(homeView.render().el);

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

    return this;
  }

});
