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
    var minSalary = this.$el.find('#minSalary')[0].value;
    var maxSalary = this.$el.find('#maxSalary')[0].value;
    console.log('minSalary', minSalary);

    this.model.addSearchFilterOnSubmit(jobTitle, company, jobLocation, jobKeywords);
    this.render();

    var userSearch = new PreLinked.Models.UserModel();
    userSearch.save({
      jobTitle: this.model.jobQuery.attributes.jobTitle,
      company: this.model.jobQuery.attributes.company,
      jobLocation: this.model.jobQuery.attributes.jobLocation,
      jobKeywords: this.model.jobQuery.attributes.jobKeywords,
      distance: 25
    });
  },

  removeSearchFilter: function(e) {
    e.preventDefault();
    this.model.removeSearchFilter(e);
    this.render();
  },

  render: function () {
    // var obj_selected = {};
    // if(this.model.get('maxSalary') === '$40,000'){
    //   obj_selected.selected_forty = true;
    // }
    // this.$el.html( this.template(
    //   _(this.model.attributes).extend(obj_selected)
    // ) );
    this.$el.html( this.template(this.model.jobQuery.attributes) );
    return this;
  }
});