/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  events:{
    'click #all-connections' : 'renderAllResults'
  },

  renderAllResults: function(e){
    e.preventDefault();
    this.render();
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.jobConnections = new PreLinked.Collections.ConnectionsCollection();
    this.loginBox = new PreLinked.Views.LoginboxView();
    this.collection.on('reset', this.render, this);
    this.jobConnections.on('reset', this.renderJobConnections, this);
  },

  render: function(){
    // console.log('ConnectionView.render()');
    // console.log('connections >>> ', this.collection.models);
    var that = this;
    this.$el.html(this.template({
      number_of_connections: this.collection.length
    }));

    this.$el
      .find('#login-box')
      .html(this.loginBox.render().el);

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
      this.checkLogin().done(function(message){
        that.$el
          .find('#connection-results')
          .html(message);
      });
    }
    this.delegateEvents();
    return this;
  },
  checkLogin: function(){
    var deferred = $.Deferred();
    $.ajax({
      type: "GET",
      url: "/session",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function(data){
      data = JSON.parse(data);
      if(data){
        deferred.resolve("Sorry, I can't find any connection for you.<br>"+
              "How about submitting a job search...<br><br>");
      }else{
        deferred.resolve("Sorry, I can't find any connection for you.<br>"+
              "How about adding me as your connection...<br><br>");
      }
    });
    return deferred.promise();
  },
  renderJobConnections: function(){
    this.$el.html(this.template({
      number_of_connections: this.jobConnections.length
    }));

    this.$el
      .find('#login-box')
      .html(this.loginBox.render().el);

    if( this.jobConnections.length ){ //if jobConnections is NOT empty
      this.$el
        .find('#connection-results')
        .html(
          this.jobConnections.map(function(item) {
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
