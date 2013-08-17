/*global PreLinked, Backbone*/

PreLinked.Models.PageModel = Backbone.Model.extend({
  defaults: {
    home: true,
    search: true
  }
});
