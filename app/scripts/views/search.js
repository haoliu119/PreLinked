/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(options){
    if(options && options.jobQuery) {
      this.jobQuery = options.jobQuery;
    }
    this.searchResultsView  = new PreLinked.Views.SearchResultsView({ collection: new PreLinked.Collections.SearchResultsCollection() });
    this.connectionsView    = new PreLinked.Views.ConnectionView({ collection: new PreLinked.Collections.ConnectionsCollection() });
  },

  events: {
    'submit form#form-search': 'submitSearch',
    'click .modal-details': 'getModalConnectionDetails'
  },

  submitSearch: function(e) {
    e.preventDefault();

    var jobTitle    = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val(),
        jobKeywords = this.$el.find('input[name=job-keywords]').val();

    // console.log('[title]-->', jobTitle, '[location]-->', jobLocation, '[keywords]-->', jobKeywords);

    this.getJobResults(jobTitle, jobLocation, jobKeywords);
  },

  // loadLinkedInData: function() {
  //   var connectionsElem = $("#connx"),
  //       loadingElem = connectionsElem.find('#connection-results');

  //   loadingElem.show();
  //   IN.API.Connections('me')
  //     .fields(['pictureUrl', 'publicProfileUrl'])
  //     .params({'count': 50})
  //     .result(function(result) {
  //       var profHTML = '';
  //       $.each(result.values, function(i,v) {
  //         if (v.pictureUrl) {
  //           profHTML += '<a href="' + v.publicProfileUrl + '" target="_blank">';
  //           profHTML += '<img class="linkedin-connection-thumb" src="' + v.pictureUrl + '"></a>';
  //         }
  //       });
  //       $("#connx").html(profHTML);
  //     });
  // },

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

  getModalConnectionDetails: function(events){
    events.preventDefault();
    console.log('getModalConnectionDetails');
    var $target = $(events.target);
    var in_id = $target.data('in-id');

    var details = new PreLinked.Models.ModalconnectiondetailsModel({
      id: in_id
    });

    var that = this;
    details.fetch()
      .done(function(data){
        var detailsView = new PreLinked.Views.ModalconnectiondetailsView({
          model: data
        });
        that.$el.append( detailsView.render().el );
        $('#myModal').foundation('reveal', 'open');
      });
  },

  render: function() {

    this.$el.html( this.template() );
    this.$el.find('#search-filters').html(this.getSearchFilter())

    var that = this;
    this.getJobResults(that.jobQuery.jobTitle, that.jobQuery.jobLocation)
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
