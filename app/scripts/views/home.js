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
    e.stopPropagation();
    var that = this,
        jobTitle = this.$el.find('input[name=job-title]').val();
    if (jobTitle !== "" && !this.jobQuery.isDuplicateFilter('jobTitle', jobTitle)){
      var titles = PreLinked.jobQuery.get("jobTitle").slice();
      titles.push(jobTitle);
      PreLinked.jobQuery.set("jobTitle", titles);
    }

    //null is used to signify that this is NOT a click event
    this.trigger('homeSearchSubmit', null, {showTab: 'jobs'});

    analytics.track('Searched on homepage', {
      jobTitle    : this.jobQuery.attributes.jobTitle,
      jobLocation : this.jobQuery.attributes.jobLocation
    });

    PreLinked.appRouter.navigate('/search', { trigger: true});
  },

  render: function() {
    this.$el
      .attr('data-page','home')
      .html(this.template(this.jobQuery.attributes));
    this.delegateEvents();
    return this;
  },

  updateLocation: function(e){
    e.preventDefault();
    var jobLocation = this.$el.find('input[name=job-location]').val();
    if (jobLocation !== ""){
      this.$el.find('input[name=job-location]').val('');
      this.$el.find('a#jobLocation').trigger('click');
      this.jobQuery.set('jobLocation', jobLocation);
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
