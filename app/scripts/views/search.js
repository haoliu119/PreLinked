/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  template: JST['app/scripts/templates/search.hbs'],

  render: function() {
  	var searchResultsItem = [{job:'Back-end Web Developer'}, {job: 'Data Analyst'}, {job: 'Database Architect'}, {job: 'Quality Assurance Engineer'}, {job: 'Front-end Web Developer'}];
    this.$el.html(this.template({jobCount: 432, jobTitle: 'Software Engineer', searchResultsItem: searchResultsItem}));
    return this;
  }

});
