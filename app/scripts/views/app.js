/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  events:{
    "click .geoLocation" : "getLocation",
    'click .tab': 'selectTab',
    'submit form#form-home': 'submitSearch',
    'click .close-notification': 'closeNotification'
  },

  imageUrls:{
    loading:    "https://webfiles.uci.edu/shaohuaz/share/prelinked/loader.gif",
    geoLocate:  "https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png"
  },

  initialize: function() {
    this.jobQuery = this.model;

    _.bindAll(this, "showPosition");
    _.bindAll(this, "showError");
    var that = this;

    this.userModel  = new PreLinked.Models.UserModel({jobQuery: this.jobQuery})
    this.userView   = new PreLinked.Views.UserView({model: this.userModel});

    this.model.on('googleGeoSuccess',function(){
      this.setIconGeo();
    }, this);
    this.model.on('googleGeoError',function(){
      this.setIconGeo();
      alert("Location information is unavailable.");
    }, this);

    this.searchView = new PreLinked.Views.SearchView({
      model: new PreLinked.Models.SearchModel(),
      jobQuery: this.jobQuery
    });

    this.searchView.on('addSearchHistory', function(){
      that.userView.addSearchHistory();
      //immediate local rendering with local data which is not completely in sync with the server
      that.searchView.renderSearchRecentBasedOnFrontendData(that.userModel.get('searchHistory'));
      //rendering the real data after the userModel has been updated
      that.searchView.listenTo( that.userModel, 'sync',  that.searchView.renderSearchRecent);
      //rendering the real data even if the sync with userModel failed
      that.searchView.listenTo( that.userModel, 'error',  that.searchView.renderSearchRecent);
    }, this);

    this.homeView = new PreLinked.Views.HomeView({
      model: new PreLinked.Models.HomeModel(),
      jobQuery: this.jobQuery
    });

    this.homeView.on('homeSearchSubmit', this.selectTab, this);
    this.searchView.on('homeSearchSubmit', this.selectTab, this);
    PreLinked.on('homeSearchSubmit', this.selectTab, this);

    this.render();

    PreLinked.appRouter = new PreLinked.Routers.AppRouter();
    PreLinked.appRouter.on('route:home', this.homePage, this);
    PreLinked.appRouter.on('route:search', this.searchPage, this);

    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });
    Backbone.history.loadUrl();
    // var that = this;
    // $(window).on('scroll', function() {
    //   that.fixedScroll();
    // });
  },

  closeNotification: function() {
    this.$el.find('#notification').hide();
  },

  selectTab: function(e, data) {
    if(data){
      var tab = '#tab-' + data.showTab;
      var dataAttr = data.showTab;
    } else {
      e.preventDefault();
      var tab = e.target;
      var dataAttr = $(tab).data('tab');
    }

    PreLinked.appRouter.navigate('/search', { trigger: true});

    this.$el.find('.tab').removeClass('on');
    this.$el.find('.search-col').removeClass('on');
    $(tab).addClass('on');
    this.$el.find('#column-' + dataAttr).addClass('on');
    window.scrollTo(0,1);
  },

  homePage: function(){
    this.$el.find('#main').html(this.homeView.render().el);
    // this.homeView.delegateEvents();
    this.$el.find('#main input[name=job-title]').focus();
    this.getLocation();
  },

  searchPage: function(){
    //this.userView.model.fetchUser();
    this.$el.find('#main').html(this.searchView.render().el);
    // this.searchView.delegateEvents();
  },

  render: function() {
    // render header, footer, other page-common components
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('#user-view').html(this.userView.render().el);
    this.delegateEvents();
    return this;
  },

  getLocation: function(event){
    if (event){
      event.preventDefault();
    }
    if(navigator.geolocation){
      this.setIconLoading();
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    }else{
      alert("Sorry, this feature is not supported by your browser.");
    }
  },

  setIconLoading: function(){
    this.$el.find('#main .geoLocation img').attr('src', this.imageUrls.loading);
  },

  setIconGeo: function(){
    this.$el.find('#main .geoLocation img').attr('src', this.imageUrls.geoLocate);
  },

  showPosition: function(position){
    var latlng = position.coords.latitude+","+position.coords.longitude;
    this.model.getGoogleGeo(latlng);
  },

  showError: function(error){
    switch(error.code)
      {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("Request timed out, try again.");
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("Request timed out, try again.");

        // alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("An unknown error occurred.");

        break;
      }
    this.setIconGeo();
  },



  // submitSearch: function(event){
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.homeView.submitSearch(event);
  //   return false;
  // }





  // fixedScroll: function() {
  //   var reset = function() {
  //     $('#connections').removeClass('scroll').css({
  //       marginTop: '',
  //       maxHeight: ''
  //     });
  //     $('#search-filters').css('margin-top', '');
  //   };

  //   if( $(window).width() < 768) {
  //     reset();
  //     return;
  //   }

  //   var viewportHt = $(window).height(),
  //       top = $(window).scrollTop(),
  //       connHt = $('#connections').height(),
  //       resultsHt = $('#job-results').height(),
  //       filterHt = $('#search-filters').height(),
  //       htResCheck = resultsHt > viewportHt;

  //   if(top > 150) {
  //     htResCheck && $('#connections').addClass('scroll').css({
  //       marginTop: (top > resultsHt-viewportHt ? resultsHt-viewportHt : top) - 130,
  //       maxHeight: viewportHt - 20
  //     });
  //     $('#search-filters').css('margin-top', top - 130);
  //   } else {
  //     reset();
  //   }
  // }
});
