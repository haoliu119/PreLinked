/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  tagName: 'li',

  template: JST['app/scripts/templates/connection.hbs'],

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    console.log('connection.js -render-');
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
