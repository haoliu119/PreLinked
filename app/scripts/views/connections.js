/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  initialize: function(){
    this.loginBox = new PreLinked.Views.LoginboxView();
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
    })
    return deferred.promise();
  },

  render: function(){
    console.log('connection.js -render-');
    console.log('CONNECTION RESULTS ', this.collection);

    this.appendLoginModal();

    this.$el.html(this.template({
      number_of_connections: this.collection.length,
      checkLogin: false
    }));
    //default
    //user is NOT logged in

    this.$el
      .find('#login-box')
      .empty()
      .append(this.loginBox.render().el);

    // var output = this.checkLogin();
    // var that = this;
    // output.done(function(data){
    //   console.log('results from checkLogin', data);
    //   that.$el.html(that.template({
    //     number_of_connections: that.collection.length,
    //     checkLogin: data
    //   }));
    // });

    this.$el.find('#connection-results').empty();
    this.$el.find('#connection-results').append(
      // TODO: DEAL WITH EXCEPTION WITH COLLECTION IS EMPTY: FOR EXAMPLE, WHEN PEOPLE SEARCH FOR POOP
      this.collection.map(function(item) {
        return new PreLinked.Views.ConnectionsitemView({
          model: item
        }).render().el;
      })
    );
    return this;
  }

});
