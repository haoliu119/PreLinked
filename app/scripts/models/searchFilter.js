/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function() {
    this.set('jobTitle', []);
    this.set('jobLocation', "");
    this.set('jobKeywords', []);
    this.on('something', this.parseDataForSearch);
  },

  parseDataForSearch: function() {
    var searchQuery = {};
    searchQuery.location = this.get('jobLocation');

    var title = this.get('jobTitle');
    var keywords = this.get('jobKeywords');
    
    searchQuery.title = title[0];
    for(var i = 1; i < title.length; i++) {
      searchQuery.title += ' ' + title[i];
    }

    searchQuery.keywords = keywords[0];
    for(var i = 1; i < keywords.length; i++) {
      searchQuery.keywords += ' ' + keywords[i];
    }

    return searchQuery;

    
  }
});
