/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(options){
    this.jobQuery = options.jobQuery;
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({ collection: new PreLinked.Collections.SearchResultsCollection(), jobQuery: this.jobQuery });
    this.connectionsView    = new PreLinked.Views.ConnectionView({ collection: new PreLinked.Collections.ConnectionsCollection(), jobQuery: this.jobQuery });
  },

  events: {
    'submit form#form-search': 'submitSearch'
  },

  submitSearch: function(e) {
    e.preventDefault();
    this.jobQuery.jobTitle    = this.$el.find('input[name=job-title]').val();
    this.jobQuery.jobLocation = this.$el.find('input[name=job-location]').val(),
    this.jobQuery.jobKeywords = this.$el.find('input[name=job-keywords]').val();
    this.render(true);
  },

  loadLinkedInData: function() {
    var connectionsElem = $("#connx"),
        loadingElem = connectionsElem.find('#connection-results');

    loadingElem.show();
    IN.API.Connections('me')
      .fields(['pictureUrl', 'publicProfileUrl'])
      .params({'count': 50})
      .result(function(result) {
        // var profHTML = '';
        // $.each(result.values, function(i,v) {
        //   if (v.pictureUrl) {
        //     profHTML += '<a href="' + v.publicProfileUrl + '" target="_blank">';
        //     profHTML += '<img class="linkedin-connection-thumb" src="' + v.pictureUrl + '"></a>';
        //   }
        // });
        // $("#connx").html(profHTML);
      });
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
        that.searchResultsView.jobQuery.title = title; // TODO: THIS IS BEST PRACTICE??????
        deferred.resolve(that.searchResultsView.render().el);
      });
    return deferred.promise();
  },

  getConnections: function(title, company, keywords) {
    var deferred = $.Deferred();
    var that = this;
    this.connectionsView.collection
      .fetch( { data: { title: title, 'company-name': company, keywords: keywords } } )
      .done(function(data){
        // that.connectionsView.jobQuery.title = title;
        console.log('connections data >>>>', data);
        deferred.resolve(that.connectionsView.render().el);
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
      });

    this.getConnections(that.jobQuery.jobTitle, '', that.jobQuery.jobLocation)
      .done(function(element) {
        that.$el.find('#connections').html(element);
      });

    return this;
  }

});
