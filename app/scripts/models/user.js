/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user',

  defaults: {
    searchHistory: [
        {jobTitle:['title1'], jobKeywords:['kw1'], location:'sf1', company:'company1', distance:25},
        {jobTitle:['title1'], jobKeywords:['kw1'], location:'sf1', company:'company1', distance:25},
        {jobTitle:['title1'], jobKeywords:['kw1'], location:'sf1', company:'company1', distance:25},
        {jobTitle:['title1'], jobKeywords:['kw1'], location:'sf1', company:'company1', distance:25},
        {jobTitle:['title1'], jobKeywords:['kw1'], location:'sf1', company:'company1', distance:25}
      ]
  },

  initialize: function() {
    this.fetchUser();
  },

  fetchUser: function(){
    // var that = this;
    // this.fetch()
    //   .done(function(){
    //     console.log('user attributes: ', that.attributes);
    //   })
    //   .fail(function(error){
    //     console.log('user session does not exist............');
    //   });
  }
});
