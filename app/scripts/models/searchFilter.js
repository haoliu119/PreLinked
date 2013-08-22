/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function() {
    this.set('jobTitle', []);
    this.set('jobLocation', "");
    this.set('jobKeywords', []);
    this.on('addSearchFilter', this.addSearchFilter);
    this.on('removeSearchFilter', this.removeSearchFilter);
  },

  addSearchFilter: function(e, title, location, keywords) {
    if(e.target.id === 'jobTitleSearchInput') {
      this.attributes.jobTitle.push(title);
    } else if(e.target.id === 'locationSearchInput') {
      this.set('jobLocation', location);
    } else if(e.target.id === 'keywordsSearchInput') {
      this.attributes.jobKeywords.push(keywords);
    }
  },

  removeSearchFilter: function(e) {
    var filterType = e.target.className.split(' ')[1];
    var elToRemove = e.target.className.split(' ')[2];
    if(filterType === 'removeJobTitleFilter') {
      var jobTitleArray = this.get('jobTitle');
      var indexToRemove = _.indexOf(jobTitleArray, elToRemove);
      jobTitleArray.splice(indexToRemove, 1);
      this.set('jobTitle', jobTitleArray);
    } else if(filterType === 'removeJobLocationFilter') {
      this.set('jobLocation', '');
    } else if(filterType === 'removeJobKeywordsFilter') {
      var jobKeywordsArray = this.get('jobKeywords');
      var indexToRemove = _.indexOf(jobKeywordsArray, elToRemove);
      jobKeywordsArray.splice(indexToRemove, 1);
      this.set('jobKeywords', jobKeywordsArray);
    }
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
