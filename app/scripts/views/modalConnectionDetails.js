/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  events: {
    'click .exitModal': function() {
      $('.exitModal').foundation('reveal', 'close');
    }
  },

  render: function(){
    this.$el.append( this.template(this.model));
    return this;
  },

  // only call this funcito when distance > 1
  getRelatedConnections: function(){
    // get the related connections array from attributes
    // ajax that to /persons/related
    // on success: render every picutre with url
  }

});