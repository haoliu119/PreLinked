/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.loginBox = new PreLinked.Views.LoginboxView();
    this.collection.on('reset', this.render, this);
  },

  initRender: function(){
    this.render();
    this.$el
      .find('#login-box')
      .html(this.loginBox.render().el);
    return this;
  },

  render: function(){
    console.log('ConnectionView.render()');
    console.log('connections >>> ', this.collection.models);

    this.$el.html(this.template({
      number_of_connections: this.collection.length
    }));

    if( this.collection.length ){ //if collection is NOT empty
      this.$el
        .find('#connection-results')
        .html(
          this.collection.map(function(item) {
            return new PreLinked.Views.ConnectionsitemView({
              model: item
            }).render().el;
          })
        );
    } else {
      this.$el
        .find('#connection-results')
        .html("Sorry. I can't find any connection for you.<br>"+
              "How about adding me as your connection...<br><br>");
    }

    return this;
  }

});
