/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(){
    // this.collection.on('add', this.render, this);
    // this.collection.on('remove', this.render, this);
  },

  render: function() {
    console.log('SearchResultsView render()', this.collection.length);
    this.$el.append(this.template(
      {jobCount: this.collection.length}
    ));
    this.$el.find('.jobResults').empty();
    this.$el.find('.jobResults').append(
      this.collection.map(function(item){
        return new PreLinked.Views.SearchResultsItemView({
          model: item
        }).render().el;
      })
    );
    return this;
  }

});
