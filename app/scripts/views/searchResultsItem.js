/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsItemView = Backbone.View.extend({

  className: 'job',

  template: JST['app/scripts/templates/searchResultsItem.hbs'],

  events: {
    'click .showConnectButton': 'showConnect'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  showConnect: function(e) {
    e.preventDefault();
    PreLinked.trigger('homeSearchSubmit', null, {showTab: 'network'});
    this.model.showConnections();
  }

});
