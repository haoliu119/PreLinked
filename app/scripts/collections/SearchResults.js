/*global PreLinked, Backbone*/

PreLinked.Collections.SearchResultsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.SearchResultsItemModel,

    url: '/jobs/search',

    comparator: function (model) {
      return -1 * parseFloat( model.get('pScore') );
    }
});
