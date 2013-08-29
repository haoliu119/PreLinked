/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/user',

  defaults: {
    searchHistory: []
    // inPerson: {}
  },

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    _.bindAll(this, "addSearchHistory"); //might be necessary
  },

  addSearchHistory: function(){
    var searchHistory = this.get('searchHistory');
    console.log('adding SearchHistory, current history obj: ', searchHistory);
    searchHistory.unshift(_.clone(this.jobQuery.attributes));
    // if(searchHistory.length > 10){
    //   searchHistory.pop();
    // }
    this.save(null, {
        success: function(model, response, options){
          console.log('success');
        },
        error: function(model, xhr, options){
          console.log('error');
        }
      });
  }
});
