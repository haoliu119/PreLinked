/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function() {
    this.model.jobQuery.on('change', this.render, this);
  },

  events: {
    'keypress .searchInput': 'addSearchFilter',
    'click .removeFilter': 'removeSearchFilter',
    'mousemove .distanceRangeSlider': 'displaySliderInput'
  },

  displaySliderInput: function() {
    var distance = this.$el.find('input[name="distance"]')[0].value;
    $('.distanceRange').html(distance + ' Miles');
    this.model.set('distance', distance);
  },

  addSearchFilter: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();

      var jobTitle = this.$el.find('input[name="job-title"]')[0].value;
      var company = this.$el.find('input[name="company"]')[0].value;
      var jobLocation = this.$el.find('input[name=job-location]')[0].value
      var jobKeywords = this.$el.find('input[name="job-keywords"]')[0].value;

      this.model.addSearchFilter(jobTitle, company, jobLocation, jobKeywords);
      this.render();
    }
  },

  addSearchFilterOnSubmit: function() {
      var jobTitle = this.$el.find('input[name="job-title"]')[0].value;
      var company = this.$el.find('input[name="company"]')[0].value;
      var jobLocation = this.$el.find('input[name=job-location]')[0].value
      var jobKeywords = this.$el.find('input[name="job-keywords"]')[0].value;

      this.model.addSearchFilterOnSubmit(jobTitle, company, jobLocation, jobKeywords);
      this.render();
  },

  removeSearchFilter: function(e) {
    e.preventDefault();
    this.model.removeSearchFilter(e);
    this.render();
  },

  render: function () {
    this.$el.html( this.template(this.model.jobQuery.attributes) );
    return this;
  }
});