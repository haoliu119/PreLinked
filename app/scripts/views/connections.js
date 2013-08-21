/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  initialize: function(){
  },

  appendLoginModal: function(){
    $('body').append('<div id="loginModal" class="reveal-modal">\
<h2>Awesome. I have it.</h2>\
<a href="http://localhost:3000/auth/linkedin">Login</a>\
<a class="close-reveal-modal">&#215;</a>\
</div>');
  },

  checkLogin: function(){
    return true;
  },

  render: function(){
    console.log('connection.js -render-');
    console.log('SearchResultColleciton', this.collection);

    this.appendLoginModal();

    this.$el.html(this.template({
      number_of_connections: this.collection.length,
      checkLogin: this.checkLogin()
    }));

    this.$el.find('#connection-results').empty();
    this.$el.find('#connection-results').append(
      this.collection.map(function(item) {
        return new PreLinked.Views.ConnectionsitemView({
          model: item
        }).render().el;
      })
    );
    return this;
  }

});
