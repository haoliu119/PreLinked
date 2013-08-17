/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  //template: JST['app/scripts/templates/search.ejs']
  template: Handlebars.compile($("#template-app").html()),

  render: function() {
    var searchModel = new PreLinked.Models.SearchModel();
    this.$el.html();
  }

});
