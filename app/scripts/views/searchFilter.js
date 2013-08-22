/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function() {
    this.on('addJobTitleFilter', this.addJobTitleFilter, this);
  },

  addJobTitleFilter: function(e) {

    jobTitle    = this.$el.find('input[name=job-title]').val();
    jobLocation = this.$el.find('input[name=job-location]').val(),
    jobKeywords = this.$el.find('input[name=job-keywords]').val();

    this.model.attributes.jobTitle.push(jobTitle);
    this.model.attributes.jobKeywords.push(jobKeywords);
    this.model.set('jobLocation', jobLocation);
  },

  render: function () {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});