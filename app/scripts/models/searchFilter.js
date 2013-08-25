/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
  },

  addSearchFilter: function(title, company, location, keywords) {
    if(title) {
      this.jobQuery.attributes.jobTitle.push(title);
    }
    if(company) {
      this.jobQuery.attributes.company.push(company);
    }
    if(location) {
      this.jobQuery.set('jobLocation', location);
    }
    if(keywords) {
      this.jobQuery.attributes.jobKeywords.push(keywords);
    }
  },

  addSearchFilterOnSubmit: function(title, company, location, keywords) {
    if(title) {
      this.jobQuery.attributes.jobTitle.push(title);
    }
    if(company) {
      this.jobQuery.attributes.company.push(company);
    }
    if(location) {
      this.jobQuery.set('jobLocation', location);
    }
    if(keywords) {
      this.jobQuery.attributes.jobKeywords.push(keywords);
    }
  },

  removeSearchFilter: function(e) {
    var filterType = e.target.className.split(' ')[1];
    var elToRemove = e.target.className.split(' ')[2];
    if(filterType === 'removeJobTitleFilter') {
      var jobTitleArray = this.jobQuery.get('jobTitle');
      var indexToRemove = _.indexOf(jobTitleArray, elToRemove);
      jobTitleArray.splice(indexToRemove, 1);
      this.jobQuery.set('jobTitle', jobTitleArray);
    } else if(filterType === 'removeCompanyFilter') {
      var companyArray = this.jobQuery.get('company');
      var indexToRemove = _.indexOf(companyArray, elToRemove);
      companyArray.splice(indexToRemove, 1);
      this.jobQuery.set('company', companyArray);
    } else if(filterType === 'removeJobLocationFilter') {
      this.jobQuery.set('jobLocation', '');
    } else if(filterType === 'removeJobKeywordsFilter') {
      var jobKeywordsArray = this.jobQuery.get('jobKeywords');
      var indexToRemove = _.indexOf(jobKeywordsArray, elToRemove);
      jobKeywordsArray.splice(indexToRemove, 1);
      console.log('keywords after splice', jobKeywordsArray);
      this.jobQuery.set('jobKeywords', jobKeywordsArray);
      console.log('keywords after set', this.jobQuery.get('jobKeywords'));
    }
  }

});
