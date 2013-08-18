/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  template: JST['app/scripts/templates/search.hbs'],

  render: function() {
    var searchModel = new PreLinked.Models.SearchModel();
    this.$el.html(this.template);
    return this;
  }

});
