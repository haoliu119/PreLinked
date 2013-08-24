/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
  },

  render: function() {

    this.$el.html(this.template(
      {jobCount: this.collection.length,
        jobTitle: this.jobQuery.title}
    ));

    if(this.collection.length){
      this.$el
        .find('.jobResults')
        .html(
          this.collection.map(function(item){
            return new PreLinked.Views.SearchResultsItemView({
              model: item
            }).render().el;
          })
        );
    } else {
      this.$el
        .find('.jobResults')
        .html("Sorry. I can't find anything for you.<br>"+
              "Do you want a bagel instead?<br><br>");
    }

    return this;
  }
});
