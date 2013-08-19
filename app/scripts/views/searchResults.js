/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  render: function() {
    console.log('SearchResultsView render()');
    this.$el.append(this.template(this.collection));
  }

});
