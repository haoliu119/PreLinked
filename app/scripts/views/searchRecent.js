/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentView = Backbone.View.extend({

    template: JST['app/scripts/templates/searchRecent.hbs'],

    render: function() {
      this.$el.html(this.template());
      //render a placeholder first

      this.$el
        .find('#search-recent-details')
        .html(
          this.collection.map(function(item) {
            return new PreLinked.Views.SearchrecentView({
              model: item
            }).render().el;
          })
        );

      return this;
    }

});
