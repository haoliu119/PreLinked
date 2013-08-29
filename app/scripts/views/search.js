/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  events: {
    'click .searchFilterButton': 'confirmSubmit'
  },

  initialize: function(options){
    this.jobQuery = options.jobQuery;

    this.searchFilterView   = new PreLinked.Views.SearchfilterView({
      model     : new PreLinked.Models.SearchfilterModel({
                    jobQuery: this.jobQuery
                  }),
      jobQuery: this.jobQuery
    });

    this.searchRecentView   = new PreLinked.Views.SearchrecentView({
      collection: new PreLinked.Collections.SearchrecentCollection(),
      jobQuery: this.jobQuery
    });

    this.searchResultsView  = new PreLinked.Views.SearchResultsView({
      collection: new PreLinked.Collections.SearchResultsCollection(),
      jobQuery  : this.jobQuery
    });

    this.connectionsView    = new PreLinked.Views.ConnectionView({
      collection: new PreLinked.Collections.ConnectionsCollection(),
      jobQuery  : this.jobQuery
    });

    this.searchResultsView.collection.on('showConnections', this.showConnections, this);

  },

  showConnections: function(jobAttributes){
    this.connectionsView.jobConnections.reset(jobAttributes.pConnections.slice(0,jobAttributes.pCount));
  },

  confirmSubmit: function(e) {
    e.preventDefault();
    this.searchFilterView.addSearchFilter(e);
    if(this.jobQuery.hasChanged()){
      // TODO: DELETE BEFORE DEPLOYMENT =========================================
      // console.log('jobQuery changed since last time, YOU MAY SUBMIT >>>>>>>>>>');
      console.log('jobQuery changed :',this.jobQuery.changedAttributes());
      // ========================================================================
      this.jobQuery.changed = {};
      this.submitSearch();
    }else{
      var answer = confirm("You haven't changed anything, search anyways?");
      if(answer){
        this.submitSearch();
      }
    }
  },

  submitSearch: function(e){
    this.trigger('addSearchHistory');
    // this.getJobResults();
    // this.getConnections();
  },

  getSearchFilter: function(){
    return this.searchFilterView.render().el;
  },

  getSearchRecent: function(){
    var deferred = $.Deferred();
    var that = this;
    this.searchRecentView.collection
      .fetch({
        success: function(data){
          // console.log('getSearchRecent', data);
          deferred.resolve(that.searchRecentView.render().el);

        },
        error: function(){
         deferred.reject(that.searchRecentView.render().el);
        }
      });
    return deferred.promise();
  },

  getJobResults: function() {
    var deferred = $.Deferred();
    var that = this;

    // TODO: DELETE BEFORE DEPLOYMENT ================
    //this.jobQuery.consoleLogJobQuery();
    // ===============================================

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
        deferred.resolve(that.connectionsView.render().el);
      })
      .fail(function(){
        console.log('Fetch connections failed');
        deferred.reject(that.connectionsView.render().el);
      });

    return deferred.promise();
  },

  renderSearchFilter: function(){
    this.$el.find('#search-filters').html(this.getSearchFilter());
  },

  renderSearchRecent: function(){
    var that = this;
    this.getSearchRecent()
      .done(function(element) {
        that.$el.find('#search-recent').html(element);
      })
      .fail(function(element) {
        that.$el.find('#search-recent').html(element);
      });
  },

  renderSearchRecentBasedOnFrontendData: function(frontendData){
    // console.log('Fake frontendData: ', frontendData);
    var localData = JSON.parse( JSON.stringify(frontendData) );
    _(localData).each(function(item){
      item.jobTitle = item.jobTitle.join(' ');
    });
    var searchRecentViewLocal   = new PreLinked.Views.SearchrecentView({
      collection: localData,
      jobQuery: this.jobQuery
    });
    this.$el.find('#search-recent').html(searchRecentViewLocal.render().el);
  },

  renderJobResults: function(){
    var that = this;
    this.getJobResults()
      .done(function(element) {
        that.$el.find('#job-results').html(element);
      })
      .fail(function(element) {
        that.$el.find('#job-results').html(element);
      });
  },

  renderConnections: function(){
    var that = this;
    this.getConnections()
      .done(function(element) {
        that.$el.find('#connections').html(element);
      })
      .fail(function(element){
        that.$el.find('#connections').html(element);
      });
  },

  render: function() {
    this.$el
      .attr('data-page','search')
      .html( this.template() );

    this.renderSearchFilter();
    this.renderSearchRecent();
    this.renderJobResults();
    this.renderConnections();

    return this;
  }

});
