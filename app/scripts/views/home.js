/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  initialize: function() {
    PreLinked.on('changePage', this.changePage);
  },

  events: {
    'submit form#form-home': 'submitSearch'
  },

  changePage: function(data) {
    var hash = data.page === 'home' ? '' : data.page;
    $('.page').removeClass('current');
    console.log(data.page);
    $('#page-' + data.page).addClass('current');
    PreLinked.appRouter.navigate('/' + hash);
  },

  search: function(data) {
    console.log('callback: search button clicked');
    //PreLinked.appRouter.navigate('/search');
  },

  submitSearch: function(e) {
    e.preventDefault();

    var that = this,
        jobTitle = this.$el.find('input[name=job-title]').val(),
        jobLocation = this.$el.find('input[name=job-location]').val();

    console.log('[title]-->', jobTitle, '[location]-->', jobLocation);
    
    $.ajax({
      type: 'GET',
      url: 'jobs/search',
      dataType: 'json',
      data: {}
    }).done(function(data) {
      //console.log(data);
      PreLinked.trigger('search');
      that.changePage({page: 'search'});
    });
  },

  render: function() {
    var homeModel = new PreLinked.Models.HomeModel();
    this.$el.attr('data-page','home').html(this.template);

    return this;
  }

});
