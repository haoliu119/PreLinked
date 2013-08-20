/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  initialize: function() {
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

    console.log('[title]-->', jobTitle, '[location]-->', jobLocation);

    PreLinked.appRouter.navigate('/search', { trigger: true});
  },

  render: function() {
    this.$el
      .attr('data-page','home')
      .html(this.template);
    return this;
  }

});
