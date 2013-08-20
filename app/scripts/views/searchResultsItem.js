/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsItemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResultsItem.hbs'],

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  }
});
