/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  template: JST['app/scripts/templates/search.hbs'],

  initialize: function(){
    // this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    console.log('searchModel', this.model.attributes);
    return this;
  }

});
