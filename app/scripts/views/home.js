/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  events: {
    'submit form#form-home': 'submitSearch'
  },

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
  },

  submitSearch: function(e) {
    e.preventDefault();

    var that = this,
        jobTitle    = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val();

    this.jobQuery.attributes.jobTitle.push(jobTitle);
    this.jobQuery.attributes.jobLocation = jobLocation;


    var userSearch = new PreLinked.Models.UserModel();
    userSearch.save({
      jobTitle: this.jobQuery.attributes.jobTitle,
      jobLocation: this.jobQuery.attributes.jobLocation
    });

    analytics.track('Searched on homepage', {
      jobTitle    : this.jobQuery.attributes.jobTitle,
      jobLocation : this.jobQuery.attributes.jobLocation
    });

    PreLinked.appRouter.navigate('/search', { trigger: true});
  },

  render: function() {
    this.$el
      .attr('data-page','home')
      .html(this.template);
    return this;
  }

});
