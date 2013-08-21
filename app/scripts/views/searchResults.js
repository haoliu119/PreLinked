/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
  },

  render: function() {

    this.$el.append(this.template(
      {jobCount: this.collection.length,
        jobTitle: this.jobQuery.title}
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
