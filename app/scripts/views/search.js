/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],


  initialize: function(options){
    this.jobQuery = options.jobQuery;
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({ collection: new PreLinked.Collections.SearchResultsCollection(), jobQuery: this.jobQuery });
    this.connectionsView    = new PreLinked.Views.ConnectionView({    collection: new PreLinked.Collections.ConnectionsCollection(), jobQuery: this.jobQuery });
    this.searchFilterView   = new PreLinked.Views.SearchfilterView({  model:      new PreLinked.Models.SearchfilterModel({jobQuery: this.jobQuery}) });
    this.searchResultsView.collection.on('showConnections', this.findConnectionsForJob, this);
  },

  events: {
    'click .searchFilterButton': 'submitSearch',
    'click .modal-details': 'getModalConnectionDetails',
  },

  submitSearch: function(e) {
    e.preventDefault();

    this.searchFilterView.addSearchFilterOnSubmit();
    this.getJobResults();

    this.userSearch = new PreLinked.Models.UserModel({
      location: this.jobQuery.attributes.location,
      company: this.jobQuery.attributes.company,
      title: this.jobQuery.attributes.title,
      keywords: this.jobQuery.attributes.keywords,
      distance: this.jobQuery.attributes.distance
    });
    this.userSearch.save();
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

    console.log('getJobResults >>>>>>', this.jobQuery.attributes);
    this.jobQuery.consoleLogJobQuery();

    this.searchResultsView.collection
      .fetch( {data: that.jobQuery.attributes} )
      .done(function(data){
        console.log('job search results', data);
        deferred.resolve(that.searchResultsView.render().el);
      })
      .fail(function(){
        deferred.reject(that.searchResultsView.render().el);
      });
    return deferred.promise();
  },

  getConnections: function(title, company, keywords) {
    var deferred = $.Deferred();
    var that = this;

    var query = {
      title: title,
      keywords: keywords
    };
    if (company && company.length > 0){
      query['company-name'] = company;
    }
    this.connectionsView.collection
      .fetch( { data: query } )
      .done(function(data){
        // that.connectionsView.jobQuery.title = title;
        console.log('GET people/search return >>>', data);
        deferred.resolve(that.connectionsView.render().el);
      })
      .fail(function(){
        console.log('Fetch connections failed');
        deferred.reject(that.connectionsView.render().el);
      });

    return deferred.promise();
  },

  render: function() {
    this.$el.html( this.template() );
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
