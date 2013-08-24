/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],


  initialize: function(options){
    this.jobQuery = options.jobQuery;
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({ collection: new PreLinked.Collections.SearchResultsCollection(), jobQuery: this.jobQuery });
    this.connectionsView    = new PreLinked.Views.ConnectionView({ collection: new PreLinked.Collections.ConnectionsCollection(), jobQuery: this.jobQuery });
    this.searchFilterView = new PreLinked.Views.SearchfilterView({
      model: new PreLinked.Models.SearchfilterModel()
    });
    this.searchResultsView.collection.on('showConnections', this.findConnectionsForJob, this);
  },

  events: {
    'click .searchFilterButton': 'submitSearch',
    'click .modal-details': 'getModalConnectionDetails',
  },

  submitSearch: function(e) {
    e.preventDefault();

    this.searchFilterView.trigger('addSearchFilterOnSubmit');

    var searchQuery = this.searchFilterView.model.parseDataForSearch();
    console.log(searchQuery);
    this.getJobResults(searchQuery.title, searchQuery.company, searchQuery.location, searchQuery.keywords);
    // this.render(true); // IS THIS IMPORTANT? Rendering the entire page causes add / remove filter events in searchFilter view to not be heard
  },

  findConnectionsForJob: function(data) {

    console.log('showConnections for data >>>', data);

    var keywords = this.searchFilterView.model.get('jobKeywords').join(' ');
    var titles   = this.searchFilterView.model.get('jobTitle').join(' ');
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

  getJobResults: function(title, company, location, keywords) {
    var deferred = $.Deferred();
    var that = this;

    console.log('title >>', title);
    console.log('company >>', company);
    console.log('location >>', location);
    console.log('keywords >>', keywords);

    var title = this.jobQuery.get("jobTitle");

    var distance = this.searchFilterView.model.get('distance');
    console.log(distance);


    this.searchResultsView.collection
      .fetch( {data: {q: [title, company, keywords].join(' ') , l: location, radius: distance}} )
      .done(function(data){
        console.log('job search results', data);
        that.searchResultsView.jobQuery.set("jobTitle") = title; // TODO: THIS IS BEST PRACTICE??????
        deferred.resolve(that.searchResultsView.render().el);
      })
      .fail(function(){
        that.searchResultsView.jobQuery.set("jobTitle") = title; // TODO: THIS IS BEST PRACTICE??????
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

  render: function(partial) {
    if (!partial) {
      this.$el.html( this.template() );
    }
    this.$el.find('#search-filters').html(this.getSearchFilter())

    var that = this;
    this.getJobResults(that.jobQuery.jobTitle, that.jobQuery.jobLocation)
      .done(function(element) {
        that.$el.find('#job-results').html(element);
      })
      .fail(function(element) {
        that.$el.find('#job-results').html(element);
      });

    this.getConnections(that.jobQuery.jobTitle, '', that.jobQuery.jobLocation)
      .done(function(element) {
        that.$el.find('#connections').html(element);
      })
      .fail(function(element){
        that.$el.find('#connections').html(element);
      });

    return this;
  }

});
