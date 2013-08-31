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
    if(jobAttributes.pCount) {
      this.connectionsView.jobConnections.reset(jobAttributes.pConnections.slice(0,jobAttributes.pCount));
    }
  },

  confirmSubmit: function(e) {
    e.preventDefault();
    this.searchFilterView.addSearchFilter(e);
    if(this.jobQuery.hasChanged()){
      this.jobQuery.changed = {};
      this.submitSearch();
    }else{
      var answer = confirm("You haven't changed anything, search anyways?");
      if(answer){
        this.submitSearch();
      }
    }
  },

  submitSearch: function(){
    //null is used to signify that this is NOT a click event
    this.trigger('homeSearchSubmit', null, {showTab: 'jobs'});
    var deferred = $.Deferred();
    var that = this;
    // TODO: FILTER OUT DUPLICATE JOB QUERIES IN SEARCH HISTORY
    this.trigger('addSearchHistory');
    // ===============================
    this.model.fetch({data: PreLinked.jobQuery.attributes})
      .done(function(JC){
        if(JC.jobs){
          // render job results
          that.searchResultsView.collection.reset(JC.jobs);
          if(JC.connections){
            // render connections
            that.connectionsView.collection.reset(JC.connections);
            deferred.resolve();
          }else{
            deferred.reject();
            alert("LinkedIn didn't like us, we recorded the error.");
          }
        }else{ // JC.connections must be available, otherwise fetch would have failed
          // render connections
          that.connectionsView.collection.reset(JC.connections);
          deferred.resolve();
          alert("Indeed didn't like us, we recorded the error.");
        }
      })
      .fail(function(errors){
        alert("Strange, both Indeed and LinkedIn didn't like us, we recorded the errors.");
        deferred.reject();
      })
      .always(function(){
        // clear loading icons
        console.log('- clear loading icons')
      });
    return deferred.promise();
  },

  getFirstDegrees: function(){
    var deferred = $.Deferred();
    var that = this;
    this.connectionsView.collection.fetch()
      .fail(function(error){
        console.log("- getFirstDegrees error - ", error);
      })
      .always(function(){
        // clear loading icons
        deferred.resolve();
        console.log('- clear loading icons')
      });
    return deferred.promise();
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


  renderSearchFilter: function(){
    this.trigger('homeSearchSubmit', null, {showTab: 'search'});
    this.$el.find('#search-filters').html(this.searchFilterView.render().el);
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

  render: function() {
    var that = this;
    this.$el
      .attr('data-page','search')
      .html( this.template() );

    this.submitSearch()
      .done(function(){
        that.$el.find('#connections').html(that.connectionsView.render().el);
      })
      .fail(function(){
        that.getFirstDegrees().always(function(){
          that.$el.find('#connections').html(that.connectionsView.render().el);
        });
      })
      .always(function(){
        that.$el.find('#job-results').html(that.searchResultsView.render().el);
      });
    this.renderSearchFilter();
    this.renderSearchRecent();

    return this;
  }

});
