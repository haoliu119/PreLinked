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

  // getJobResults: function(){
  //   var searchResultsItem = [{job:'Back-end Web Developer'}, {job: 'Data Analyst'}, {job: 'Database Architect'}, {job: 'Quality Assurance Engineer'}, {job: 'Front-end Web Developer'}];
  //   this.$el
  //     .attr('data-page','search')
  //     .html(this.template({
  //       jobCount: 432,
  //       jobTitle: 'Software Engineer',
  //       searchResultsItem: searchResultsItem
  //     }));
  // },

  getSearchFilter: function(){
    var searchFilterModel = new PreLinked.Models.SearchfilterModel();
    var searchFilterView = new PreLinked.Views.SearchfilterView({
      model: searchFilterModel
    });
    return searchFilterView.render().el;
  },

  getJobResults: function(){
    var deferred = $.Deferred();
    var searchResults = new PreLinked.Collections.SearchResultsCollection();
    var that = this;
    searchResults
      .fetch()
      .done(function(data){
        var jobs = JSON.parse(data);
        var results = jobs.results;
        console.log('getSearchResults', results.length);

        var searchResultsView = new PreLinked.Views.SearchResultsView({
          collection: results
        });
        deferred.resolve(searchResultsView.render().el);
      });
    return deferred.promise();
  },

  getConnections: function() {
    var deferred = $.Deferred();
    var connectionsResults = new PreLinked.Collections.ConnectionsCollection();
    var that = this;
    connectionsResults
      .fetch()
      .done(function(data){
        var connections = JSON.parse(data);
        var results = connections.values;
        console.log('getConnections', results.length);

        var connectionsView = new PreLinked.Views.ConnectionView({
          collection: results
        });
        deferred.resolve(connectionsView.render().el);
      });
    return deferred.promise();
  },

  getModalConnectionDetails: function(){
    console.log('getModalConnectionDetails');
    var details = new PreLinked.Models.ModalconnectiondetailsModel();
    var detailsView = new PreLinked.Views.ModalconnectiondetailsView({
      model: details
    });
    this.$el.append( detailsView.render().el );
    debugger;
    $('#myModal').foundation('reveal', 'open');
  },

  render: function() {
    // this.getJobResults();
    // this.getSearchResults();
    this.$el.html( this.template() );
    this.$el
      .find('#search-filters')
      .empty()
      .append( this.getSearchFilter() );

    var that = this;
    this.getJobResults()
      .done(function(data){
        that.$el
          .find('#job-results')
          .empty()
          .append(data);
      });

    this.getConnections()
      .done(function(data) {
        that.$el
          .find('#connections')
          .empty()
          .append(data);
      });

    this.getModalConnectionDetails();
    // console.log('searchModel', this.model.attributes);
    return this;
  }

});
