/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(){
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    console.log('SearchResultsView render()');
    this.$el.append(this.template(this.collection));
  }

});
