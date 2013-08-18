/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchresultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  render: function() {
    this.el.append(this.template);
  }

});
