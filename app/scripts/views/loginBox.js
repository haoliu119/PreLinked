/*global PreLinked, Backbone, JST*/

PreLinked.Views.LoginboxView = Backbone.View.extend({

  template: JST['app/scripts/templates/loginBox.hbs'],

  initialize: function(){
    this.render();
  },

  events: {
    'click .in-login': 'showLoginProgress'
  },

  showLoginProgress: function(){

  },

  checkLogin: function(){
    var deferred = $.Deferred();
    $.ajax({
      type: "GET",
      url: "/session",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function(data){
      deferred.resolve( JSON.parse(data) );
      //from string to boolean
    });
    return deferred.promise();
  },

  render: function(){

    var output = this.checkLogin();
    var that = this;
    output.done(function(data){
      that.$el.html(that.template({
        checkLogin: data
      }));
    });
    this.delegateEvents();
    return this;
  }

});
