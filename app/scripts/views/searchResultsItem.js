/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchresultsitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResultsItem.hbs'],

  render: function() {
    this.$el.append(this.template);
  }

});
