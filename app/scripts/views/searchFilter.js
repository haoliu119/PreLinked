/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function() {
    this.on('addSearchFilter', this.addSearchFilter, this);
    this.on('removeSearchFilter', this.removeSearchFilter, this);
  },

  addSearchFilter: function(e) {
    if(e.target.id === 'jobTitleSearchInput') {
      var jobTitle = this.$el.find('input[name="job-title"]')[0].value;
      this.model.attributes.jobTitle.push(jobTitle);
    } else if(e.target.id === 'locationSearchInput') {
      var jobLocation = this.$el.find('input[name=job-location]')[0].value;
      this.model.set('jobLocation', jobLocation);
    } else if(e.target.id === 'keywordsSearchInput') {
      var jobKeywords = this.$el.find('input[name=job-keywords]')[0].value;
      this.model.attributes.jobKeywords.push(jobKeywords);
    }
    this.render();
  },

  removeSearchFilter: function(e) {
    var filterType = e.target.className.split(' ')[0];
    var elToRemove = e.target.className.split(' ')[1];

    if(filterType === 'removeJobTitleFilter') {
      var jobTitleArray = this.model.get('jobTitle');
      var indexToRemove = _.indexOf(jobTitleArray, elToRemove);
      jobTitleArray.splice(indexToRemove, 1);
      this.model.set('jobTitle', jobTitleArray);
    } else if(filterType === 'removeJobLocationFilter') {
      this.model.set('jobLocation', '');
    } else if(filterType === 'removeJobKeywordsFilter') {
      var jobKeywordsArray = this.model.get('jobKeywords');
      var indexToRemove = _.indexOf(jobKeywordsArray, elToRemove);
      jobKeywordsArray.splice(indexToRemove, 1);
      this.model.set('jobKeywords', jobKeywordsArray);
    }
    this.render();
  },

  render: function () {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});