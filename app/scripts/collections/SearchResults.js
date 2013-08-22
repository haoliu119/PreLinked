/*global PreLinked, Backbone*/

PreLinked.Collections.SearchResultsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.SearchResultsItemModel,

    url: '/jobs/search'
});
