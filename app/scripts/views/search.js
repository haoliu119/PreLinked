/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(){
    // this.model.on('change', this.render, this);
  },

  events: {
    'submit form#form-search': 'submitSearch'
  },

  submitSearch: function(e) {
    e.preventDefault();

    var that = this,
        jobTitle = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val(),
        jobKeywords = this.$el.find('input[name=job-keywords]').val();

    console.log('[title]-->', jobTitle, '[location]-->', jobLocation, '[keywords]-->', jobKeywords);

    $.ajax({
      type: 'GET',
      url: '/jobs/search',
      dataType: 'json',
      data: {}
    }).done(function(data) {
      // console.log(data);
    });
  },

  render: function() {
    var searchResultsItem = [{job:'Back-end Web Developer'}, {job: 'Data Analyst'}, {job: 'Database Architect'}, {job: 'Quality Assurance Engineer'}, {job: 'Front-end Web Developer'}];
    this.$el.attr('data-page','search').html(this.template({jobCount: 432, jobTitle: 'Software Engineer', searchResultsItem: searchResultsItem}));
    // this.$el.html( this.template(this.model.attributes) );
    // console.log('searchModel', this.model.attributes);
    return this;
  }

});
