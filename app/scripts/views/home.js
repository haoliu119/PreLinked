/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  initialize: function(options) {
    if(options && options.jobQuery){
      this.jobQuery = options.jobQuery;
    }
    // PreLinked.on('changePage', this.changePage);
  },

  events: {
    'submit form#form-home': 'submitSearch'
  },

  search: function(data) {
    console.log('callback: search button clicked');
    //PreLinked.appRouter.navigate('/search');
  },

  submitSearch: function(e) {
    e.preventDefault();

    var that = this,
        jobTitle = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val();

    this.jobQuery.set("jobTitle") = jobTitle;
    this.jobQuery.set("jobLocation") = jobLocation;
    console.log('after submit:', this.jobQuery);

    console.log('[title]-->', jobTitle, '[location]-->', jobLocation);
    analytics.track('Searched on homepage', {
      jobTitle    : jobTitle,
      jobLocation : jobLocation
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
