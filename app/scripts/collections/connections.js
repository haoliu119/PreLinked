/*global PreLinked, Backbone*/

PreLinked.Collections.ConnectionsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.ConnectionModel,

    url: '/people/search'

});