/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user/searches',

  defaults: {
    location: '',
    company: '',
    title: '',
    keywords: '',
    distance: ''
  },

  initialize: function() {
    var data = [{
      location: 'location',
      company: 'company',
      title: 'title',
      keywords: 'keywords',
      distance: 'distance'
    }];

    this.set('searches', data);
  }
});
