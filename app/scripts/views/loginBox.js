/*global PreLinked, Backbone, JST*/

PreLinked.Views.LoginboxView = Backbone.View.extend({

  template: JST['app/scripts/templates/loginBox.hbs'],

  initialize: function(){
    this.Modal = (new PreLinked.Views.PmodalView()).pmodal;
    this.render();
  },

  events: {
    'click .in-login': 'openLoginModal'
  },

  openLoginModal: function(){
    var contentStr = '<h3><a href="http://localhost:3000/auth/linkedin">Login</a></h3>';
    var modal = new this.Modal({
      title: 'Awesome. I have it.',
      content: contentStr,
      footer: false
    });
    modal.open();
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
    })
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

    return this;
  }

});
