/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(){
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({ collection: new PreLinked.Collections.SearchResultsCollection() });
    this.connectionsView    = new PreLinked.Views.ConnectionView({ collection: new PreLinked.Collections.ConnectionsCollection() });
  },

  events: {
    'submit form#form-search': 'submitSearch'
  },

  submitSearch: function(e) {
    e.preventDefault();

    var jobTitle    = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val(),
        jobKeywords = this.$el.find('input[name=job-keywords]').val();

    // console.log('[title]-->', jobTitle, '[location]-->', jobLocation, '[keywords]-->', jobKeywords);

    this.getJobResults(jobTitle, jobLocation, jobKeywords);
  },

  getSearchFilter: function(){
    var searchFilterModel = new PreLinked.Models.SearchfilterModel();
    var searchFilterView = new PreLinked.Views.SearchfilterView({
      model: searchFilterModel
    });
    return searchFilterView.render().el;
  },

  getJobResults: function(title, location, keywords) {
    var deferred = $.Deferred();
    var that = this;
    this.searchResultsView.collection
      .fetch( {data: {q: [title, keywords].join(' ') , l: location}} )
      .done(function(){
        deferred.resolve(that.searchResultsView.render().el);
      });
    return deferred.promise();
  },

  getConnections: function(title, company, keywords) {
    var deferred = $.Deferred();
    var that = this;
    this.connectionsView.collection
      .fetch( { data: { title: title, 'company-name': company, keywords: keywords } } )
      .done(function(){
        deferred.resolve(that.connectionsView.render().el);
      });
    return deferred.promise();
  },

  render: function() {
    this.$el.html( this.template() );
    this.$el.find('#search-filters').html(this.getSearchFilter())

    var that = this;
    this.getJobResults('teacher', 'washington, dc')
      .done(function(element) {
        that.$el.find('#job-results').html(element);
      });

    this.getConnections('teacher', '', 'washington, dc')
      .done(function(element) {
        that.$el.find('#connections').html(element);
      });

    return this;
  }

});
