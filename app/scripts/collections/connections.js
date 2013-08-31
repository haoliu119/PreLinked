/*global PreLinked, Backbone*/

PreLinked.Collections.ConnectionsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.ConnectionModel,

    // by default, connections will show you first degrees
    url: '/people'

});