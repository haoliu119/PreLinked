/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecent.hbs'],

  events: {
    'click .useThisToSearch'  : 'useSeachHistoryToSearch'
  },

  initialize: function(){
    this.jobQuery = PreLinked.jobQuery;
  },

  useSeachHistoryToSearch: function(event){
    event.preventDefault();
    var target = $(event.target).closest('a');
    var id = target.data('id');
    this.jobQuery.set(_.clone(this.collection.get(id).attributes));
  },

  render: function() {
    this.$el.html(this.template());
    //render a placeholder first

    // console.log('searchRecent collection length: ', this.collection.length);
    this.$el
      .find('#search-recent-details')
      .html(
        this.collection.map(function(item) {
          return new PreLinked.Views.SearchrecentitemView({
            model: item
          }).render().el;
        })
      );
    this.delegateEvents();
    return this;
  },

});
