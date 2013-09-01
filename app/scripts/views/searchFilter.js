/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    PreLinked.jobQuery.on('change', this.render, this);
    this.regexTrimHeadTailSpace = /^[ \t]+|[ \t]+$/;
  },

  events: {
    'submit form#form-search':      'addSearchFilter',
    'click .addFilterButton':       'addSearchFilter',
    'mouseup .distanceRangeSlider': 'addSearchFilter',
    'change select':                'addSearchFilter',
    'click .removeFilter':          'removeSearchFilter',
    'submit #form-location-search': 'updateLocation',
    'click a#jobLocation':          'locationOnFocus'
  },

  addSearchFilter: function(e) {
    if(e.target.className !== 'distanceRangeSlider'){ // otherwise mouseup won't release mouse
      e.preventDefault();
    }
    console.log('addSearchFilter >>>>>>');
    var jobTitle =    this.$el.find('input[name="job-title"]')[0].value;
    var company =     this.$el.find('input[name="company"]')[0].value;
    var jobKeywords = this.$el.find('input[name="job-keywords"]')[0].value;
    var distance =    this.$el.find('input[name="distance"]')[0].value;
    var minSalary =   this.$el.find('#minSalary')[0].value;
    var maxSalary =   this.$el.find('#maxSalary')[0].value;

    this.model.addSearchFilter(jobTitle, company, jobKeywords, distance, minSalary, maxSalary);
  },

  removeSearchFilter: function(e) {
    e.preventDefault();
    this.model.removeSearchFilter(e);
  },

  render: function () {
    console.log('searchFilter View .render()');
    var obj = _.clone(this.jobQuery.attributes);
    _(obj).extend({
      salaryList: ["None", "40", "60", "80", "100", "120"]
    });
    this.$el.html( this.template(obj) );
    this.$el.find('#minSalary').find("[data-id='" + this.jobQuery.attributes.minSalary + "']").attr('selected','selected');
    this.$el.find('#maxSalary').find("[data-id='" + this.jobQuery.attributes.maxSalary + "']").attr('selected','selected');
    this.delegateEvents();
    return this;
  },

  updateLocation: function(e){
    e.preventDefault();
    var jobLocation = this.$el.find('input[name=job-location]').val();
    jobLocation = jobLocation.replace(this.regexTrimHeadTailSpace, "");
    if (jobLocation !== ""){
      this.$el.find('#jobLocation').trigger('click');
      this.$el.find('input[name=job-location]').val('');
      this.jobQuery.set('jobLocation', jobLocation);
    }
  },

  locationOnFocus: function(e){
    e.preventDefault();
    this.$el.find('input[name=job-location]').focus();
  }
});