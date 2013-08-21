/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  initialize: function(){
  },

  render: function(){
    console.log('connection.js -render-');
    console.log('CONNECTION RESULTS ', this.collection);

    this.$el.html(this.template(
      {number_of_connections: this.collection.length}
    ));

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
