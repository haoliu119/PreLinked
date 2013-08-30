/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.regexTrimHeadTailSpace = /^[ \t]+|[ \t]+$/;
  },

  isDuplicateFilter: function(filterType, filterWord) {
    var filterArray = this.jobQuery.attributes[filterType];
    var filterWord = filterWord.toLowerCase();
    return _.contains(filterArray, filterWord);
  },

  addSearchFilter: function(title, company, keywords, distance, minSalary, maxSalary) {
    if(title && !this.isDuplicateFilter('jobTitle', title)) {
      title = title.replace(this.regexTrimHeadTailSpace, "");
      var temp = this.jobQuery.attributes.jobTitle.slice();
      temp.push(title);
      this.jobQuery.set('jobTitle', temp);
    }
    if(company && !this.isDuplicateFilter('company', company)) {
      company = company.replace(this.regexTrimHeadTailSpace, "");
      var temp = this.jobQuery.attributes.company.slice();
      temp.push(company);
      this.jobQuery.set('company', temp);
    }
    if(keywords && !this.isDuplicateFilter('jobKeywords', keywords)) {
      keywords = keywords.replace(this.regexTrimHeadTailSpace, "");
      var temp = this.jobQuery.attributes.jobKeywords.slice();
      temp.push(keywords);
      this.jobQuery.set('jobKeywords', temp);
    }
    if(distance !== this.jobQuery.attributes.distance){
      this.jobQuery.set('distance', distance);
    }
    if(minSalary !== this.jobQuery.attributes.minSalary) {
      this.jobQuery.set('minSalary', minSalary);
    }
    if(maxSalary !== this.jobQuery.attributes.maxSalary) {
      this.jobQuery.set('maxSalary', maxSalary);
    }
  },

  removeSearchFilter: function(e) {
    var filterType = e.target.className.split(' ')[1];
    var elToRemove = e.target.className.split(' ')[2];
    if(filterType === 'removeJobTitleFilter') {
      var jobTitleArray = this.jobQuery.get('jobTitle').slice();
      var indexToRemove = _.indexOf(jobTitleArray, elToRemove);
      jobTitleArray.splice(indexToRemove, 1);
      this.jobQuery.set('jobTitle', jobTitleArray);
    } else if(filterType === 'removeCompanyFilter') {
      var companyArray = this.jobQuery.get('company').slice();
      var indexToRemove = _.indexOf(companyArray, elToRemove);
      companyArray.splice(indexToRemove, 1);
      this.jobQuery.set('company', companyArray);
    } else if(filterType === 'removeJobLocationFilter') {
      this.jobQuery.set('jobLocation', '');
    } else if(filterType === 'removeJobKeywordsFilter') {
      var jobKeywordsArray = this.jobQuery.get('jobKeywords').slice();
      var indexToRemove = _.indexOf(jobKeywordsArray, elToRemove);
      jobKeywordsArray.splice(indexToRemove, 1);
      this.jobQuery.set('jobKeywords', jobKeywordsArray);
    }
  }
});
