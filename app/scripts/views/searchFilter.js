/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function() {
    this.on('addSearchFilter', this.addSearchFilter, this);
    this.on('removeJobTitleFilter', this.removeJobTitleFilter, this);
  },

  addSearchFilter: function(e) {
      console.log('FILTER HIT');
    if(e.target.id === 'jobTitleSearchInput') {
      var jobTitle = this.$el.find('input[name=job-title]').val();
      this.model.attributes.jobTitle.push(jobTitle);
    } else if(e.target.id === 'locationSearchInput') {
      var jobLocation = this.$el.find('input[name=job-location]').val();
      this.model.set('jobLocation', jobLocation);
    } else if(e.target.id === 'keywordsSearchInput') {
      var jobKeywords = this.$el.find('input[name=job-keywords]').val();
      this.model.attributes.jobKeywords.push(jobKeywords);
    }
  },

  removeJobTitleFilter: function(e) {
    var elToRemove = e.target.className.split(' ')[1];
    var jobTitleArray = this.model.get('jobTitle');
    var indexToRemove = _.indexOf(jobTitleArray, elToRemove);
    jobTitleArray.splice(indexToRemove, 1);
    this.model.set('jobTitle', jobTitleArray);
  },

  render: function () {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});