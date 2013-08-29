/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecentItem.hbs'],

  events: {
    'click .useThisToSearch'  : 'useSeachHistoryToSearch'
  },

  initialize: function(){
    //
  },

  useSeachHistoryToSearch: function(events){
    events.preventDefault();
    var $target = $(events.target);
    var item = $target.closest('.useThisToSearch');
    console.log('useSeachHistoryToSearch', item);
  },

  render: function() {
    var data = this.model.attributes || this.model;
    this.$el.append( this.template(data) );
    return this;
  }

});
