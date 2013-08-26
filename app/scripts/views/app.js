/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  events:{
    "click .geoLocation" : "getLocation"
  },

  imageUrls:{
    loading:    "https://webfiles.uci.edu/shaohuaz/share/prelinked/loader.gif",
    geoLocate:  "https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png"
  },

  initialize: function() {
    this.jobQuery = this.model;
    this.render();

    _.bindAll(this, "showPosition");
    _.bindAll(this, "showError");
    this.model.on('googleGeoSuccess',function(){
      this.setIconGeo();
    }, this);
    this.model.on('googleGeoError',function(){
      this.setIconGeo();
      alert("Location information is unavailable.");
    }, this);

    this.searchView = new PreLinked.Views.SearchView({jobQuery: this.jobQuery});
    this.homeView = new PreLinked.Views.HomeView({
      model: new PreLinked.Models.HomeModel(),
      jobQuery: this.jobQuery
    });

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
  // },

  homePage: function(){
    debugger;
    this.$el.find('#main').html(this.homeView.render().el);
    this.$el.find('#main input[name=job-title]').focus();
    this.getLocation();
  },

  searchPage: function(){
    this.$el.find('#main').html(this.searchView.render().el);
  },

  render: function() {
    // render header, footer, other page-common components
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  getLocation: function(){
    if(navigator.geolocation){
      this.setIconLoading();
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    }else{
      alert("Sorry, this feature is not supported by your browser.");
    }
  },

  setIconLoading: function(){
    var currentPage = PreLinked.appRouter.routes[Backbone.history.fragment];
    alert(currentPage);
    this.$el.find('#main #page-' + currentPage + ' .geoLocation img').attr('src', this.imageUrls.loading);
  },

  setIconGeo: function(){
    var currentPage = PreLinked.appRouter.routes[Backbone.history.fragment];
    alert(currentPage);
    this.$el.find('#main #page-' + currentPage + ' .geoLocation img').attr('src', this.imageUrls.geoLocate);
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
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("Request timed out, try again.");
        // alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      }
    this.setIconGeo();
  }

});
