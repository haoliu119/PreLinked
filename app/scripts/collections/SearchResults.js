/*global PreLinked, Backbone*/

PreLinked.Collections.SearchResultsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.SearchResultsItemModel,

    url: '/jobs/search',

    comparator: function (model) {
      console.log('pScore', model.get('pScore'));
      return parseFloat( model.get('pScore') );
    }
});
