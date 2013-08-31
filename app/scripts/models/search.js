/*global PreLinked, Backbone*/
PreLinked.Models.SearchModel = Backbone.Model.extend({
  // this model will contain jobsSorted result from our server
  url: '/jobs/search'
});
