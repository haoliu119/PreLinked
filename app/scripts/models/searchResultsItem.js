/*global PreLinked, Backbone*/

PreLinked.Models.SearchResultsItemModel = Backbone.Model.extend({

  showConnections: function(){
    this.trigger('showConnections', this.attributes.pConnections);
  }

});
