/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(){
    // this.model.on('change', this.render, this);
  },

  render: function() {
    var searchResultsItem = [{job:'Back-end Web Developer'}, {job: 'Data Analyst'}, {job: 'Database Architect'}, {job: 'Quality Assurance Engineer'}, {job: 'Front-end Web Developer'}];
    this.$el.html(this.template({jobCount: 432, jobTitle: 'Software Engineer', searchResultsItem: searchResultsItem}));
    // this.$el.html( this.template(this.model.attributes) );
    // console.log('searchModel', this.model.attributes);
    return this;
  }

});
