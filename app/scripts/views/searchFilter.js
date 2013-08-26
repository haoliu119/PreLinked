/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.jobQuery.on('change', this.render, this);
  },

  events: {
    'keypress .searchInput': 'addSearchFilter',
    'click .removeFilter': 'removeSearchFilter',
    'mouseup .distanceRangeSlider': 'displaySliderInput'
  },

  displaySliderInput: function() {
    var distance = this.$el.find('input[name="distance"]')[0].value;
    this.jobQuery.set('distance', distance);
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
    var minSalary = this.$el.find('#minSalary')[0].value;
    var maxSalary = this.$el.find('#maxSalary')[0].value;
    console.log('minSalary', minSalary);

    this.model.addSearchFilterOnSubmit(jobTitle, company, jobLocation, jobKeywords);
    this.render();

    var userSearch = new PreLinked.Models.UserModel();
    userSearch.save({
      jobTitle: this.jobQuery.attributes.jobTitle,
      company: this.jobQuery.attributes.company,
      jobLocation: this.jobQuery.attributes.jobLocation,
      jobKeywords: this.jobQuery.attributes.jobKeywords,
      distance: 25
    });
  },

  removeSearchFilter: function(e) {
    e.preventDefault();
    this.model.removeSearchFilter(e);
    this.render();
  },

  render: function () {
    var obj = _.clone(this.jobQuery.attributes);
    _(obj).extend({
      salaryList: ["None", "40", "60", "80", "100", "120"]
    });
    this.$el.html( this.template(obj) );
    this.$el.find('#minSalary').find("[data-id='" + this.jobQuery.attributes.minSalary + "']").attr('selected','selected');
    this.$el.find('#maxSalary').find("[data-id='" + this.jobQuery.attributes.maxSalary + "']").attr('selected','selected');
    return this;
  }
});