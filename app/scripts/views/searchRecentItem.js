/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecentItem.hbs'],

  events: {
    'click .useThisToSearch'  : 'useSeachHistoryToSearch'
  },

  initialize: function(options){
    this.historyIndex = options.historyIndex;
  },

  useSeachHistoryToSearch: function(events){
    events.preventDefault();
    var $target = $(events.target);
    var historyIndex = $target.closest('.useThisToSearch').data('historyindex');
    console.log('useSeachHistoryToSearch', historyIndex);
  },

  render: function() {
    var data = this.model.attributes || this.model;
    _(data).extend({
      historyIndex: this.historyIndex
    });
    this.$el.append( this.template(data) );
    return this;
  }

});
