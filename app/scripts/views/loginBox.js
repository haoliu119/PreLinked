/*global PreLinked, Backbone, JST*/

PreLinked.Views.LoginboxView = Backbone.View.extend({

  template: JST['app/scripts/templates/loginBox.hbs'],

  initialize: function(){
    this.appendLoginModal();

    this.render();
  },

  appendLoginModal: function(){
    $('body').append('<div id="loginModal" class="reveal-modal">\
<h2>Awesome. I have it.</h2>\
<a href="http://localhost:3000/auth/linkedin">Login</a>\
<a class="close-reveal-modal">&#215;</a>\
</div>');
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
    this.$el.html( this.template({
      checkLogin: false
    }) );

    var output = this.checkLogin();
    var that = this;
    output.done(function(data){
      console.log('results from checkLogin', data);
      that.$el.html(that.template({
        checkLogin: data
      }));
    });

    return this;
  }

});
