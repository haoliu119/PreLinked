/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  events: {
    'click .searchFilterButton': 'submitSearch',
  },

  initialize: function(options){
    this.jobQuery = options.jobQuery;
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({
      collection: new PreLinked.Collections.SearchResultsCollection(),
      jobQuery  : this.jobQuery
    });
    this.connectionsView    = new PreLinked.Views.ConnectionView({
      collection: new PreLinked.Collections.ConnectionsCollection(),
      jobQuery  : this.jobQuery
    });
    this.searchFilterView   = new PreLinked.Views.SearchfilterView({
      model     : new PreLinked.Models.SearchfilterModel({
                    jobQuery: this.jobQuery
                  }),
      jobQuery: this.jobQuery
    });
    this.searchResultsView.collection.on('showConnections', this.findConnectionsForJob, this);
  },

  submitSearch: function(e) {
    e.preventDefault();
    // if(this.jobQuery.hasChanged()){
      // alert('CHANGED !!!!!!!!!!!');
      // console.log('changedAttributes >>>>>>>>',this.jobQuery.changedAttributes());
      this.searchFilterView.addSearchFilterOnSubmit();
      this.getJobResults();
      this.getConnections();
    // }
  },

  findConnectionsForJob: function(data) {

    console.log('showConnections for data >>>', data);

    var keywords = this.jobQuery.get('jobKeywords').join(' ');
    var titles   = this.jobQuery.get('jobTitle').join(' ');
    var that = this;
    this.getConnections(titles, data.company, keywords)
      .done(function(element) {
        that.$el.find('#connections').html(element);
      })
      .fail(function(element){
        that.$el.find('#connections').html(element);
      });
    this.connectionsView.render();
  },

  getSearchFilter: function(){
    return this.searchFilterView.render().el;
  },

  getJobResults: function() {
    var deferred = $.Deferred();
    var that = this;

    // TODO: DELETE BEFORE DEPLOYMENT
    this.jobQuery.consoleLogJobQuery();
    // ----------------------------------

    this.searchResultsView.collection
      .fetch( {data: that.jobQuery.attributes} )
      .done(function(data){
        deferred.resolve(that.searchResultsView.render().el);
      })
      .fail(function(){
        deferred.reject(that.searchResultsView.render().el);
      });
    return deferred.promise();
  },

  getConnections: function(start, degree) {
    var deferred = $.Deferred();
    var that = this;

    var keywords = this.jobQuery.attributes.jobKeywords;
    keywords = keywords.concat(this.jobQuery.attributes.company); // Linkedin API company parameter is inaccurate, passing companies in as keywords
    var query = {
      title: this.jobQuery.attributes.jobTitle.join(' '),
      keywords: keywords.join(' '),
      start: '0',
      count: '25',
      facet:  'network,F,S,A,O'
    };

    this.connectionsView.collection
      .fetch( { data: query } )
      .done(function(data){
        // that.connectionsView.jobQuery.title = title;
        deferred.resolve(that.connectionsView.render().el);
      })
      .fail(function(){
        console.log('Fetch connections failed');
        deferred.reject(that.connectionsView.render().el);
      });

    return deferred.promise();
  },

  render: function() {
    this.$el
      .attr('data-page','search')
      .html( this.template() );
    this.$el.find('#search-filters').html(this.getSearchFilter())

    var that = this;
    this.getJobResults()
      .done(function(element) {
        that.$el.find('#job-results').html(element);
      })
      .fail(function(element) {
        that.$el.find('#job-results').html(element);
      });

    this.getConnections()
      .done(function(element) {
        that.$el.find('#connections').html(element);
      })
      .fail(function(element){
        that.$el.find('#connections').html(element);
      });

    return this;
  }

});
