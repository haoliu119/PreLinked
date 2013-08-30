/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecentItem.hbs'],

  events: {
    'click .useThisToSearch'  : 'useSeachHistoryToSearch'
  },

  initialize: function(options){
    this.jobQuery = options.jobQuery;
  },

  useSeachHistoryToSearch: function(events){
    events.preventDefault();
    var $target = $(events.target);
    var historyIndex = $target.closest('.useThisToSearch').data('historyindex');
    this.jobQuery.set( _.clone(this.model.attributes) );
  },

  render: function() {
    var data = this.model.attributes || this.model;
    this.$el.append( this.template(data) );
    return this;
  }

});
