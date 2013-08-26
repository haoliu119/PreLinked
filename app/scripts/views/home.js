/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  events: {
    'submit form#form-home': 'submitSearch',
    'submit form#form-location': 'updateLocation',
    'click a#jobLocation' : 'locationOnFocus'
  },

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.jobQuery.on('change:jobLocation', this.renderLocation, this);
  },

  submitSearch: function(e) {
    e.preventDefault();

    var that = this,
        jobTitle    = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val();

    this.jobQuery.attributes.jobTitle.push(jobTitle);
    this.jobQuery.attributes.jobLocation = jobLocation

    analytics.track('Searched on homepage', {
      jobTitle    : jobTitle,
      jobLocation : jobLocation
    });

    PreLinked.appRouter.navigate('/search', { trigger: true});
  },

  render: function() {
    this.$el
      .attr('data-page','home')
      .html(this.template(this.jobQuery.attributes));
    return this;
  },

  updateLocation: function(e){
    e.preventDefault();
    var jobLocation = this.$el.find('input[name=job-location]').val();
    if (jobLocation !== ""){
      this.jobQuery.set('jobLocation', jobLocation);
      this.$el.find('input[name=job-location]').val('');
      this.$el.find('a#jobLocation').trigger('click');
    }
  },

  renderLocation: function(){
    this.$el.find('#jobLocation').text(this.jobQuery.attributes.jobLocation);
  },

  locationOnFocus: function(e){
    e.preventDefault();
    this.$el.find('input[name=job-location]').focus();
  }

});
