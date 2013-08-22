/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  render: function(){
    this.$el.append( this.template(this.model));
    return this;
  }

});