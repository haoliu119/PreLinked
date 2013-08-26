/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user/searches',

  defaults: {
    jobTitle: [],
    company: [],
    jobLocation: '',
    jobKeywords: [],
    distance: 25
  },

  initialize: function() {
    console.log('user model save');
    // this.save({
    //   jobTitle: ['title']
    //   // company: ['company'],
    //   // jobLocation: 'location',
    //   // jobKeywords: ['keywords'],
    //   // distance: 10
    //   // jobTitle: this.get('title'),
    //   // company: this.get('company'),
    //   // jobLocation: this.get('jobLocation'),
    //   // jobKeywords: this.get('jobKeywords'),
    //   // distance: this.get('distance')
    // });
  }
});
