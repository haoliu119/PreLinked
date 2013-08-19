/*global PreLinked, Backbone*/

PreLinked.Collections.ConnectionsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.ConnectionsModel,

    url: '/people/search'

});
