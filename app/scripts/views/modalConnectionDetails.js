/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  render: function(){
    //todo
    //fix JSON.parse(this.model)
    this.$el.append( this.template(JSON.parse(this.model)) );
    return this;
  }

});