/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecentItem.hbs'],

  initialize: function(){
    this.jobQuery = PreLinked.jobQuery;
  },

  render: function() {
    var data = this.model.attributes || this.model ;
    this.$el.append( this.template({data: data, model: this.model}) );
    this.delegateEvents();
    return this;
  }

});
