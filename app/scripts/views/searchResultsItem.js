/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsItemView = Backbone.View.extend({

  className: 'job',

  template: JST['app/scripts/templates/searchResultsItem.hbs'],

  events: {
    'click': ''
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
