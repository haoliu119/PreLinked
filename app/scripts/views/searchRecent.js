/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentView = Backbone.View.extend({

    template: JST['app/scripts/templates/searchRecent.hbs'],

    render: function() {
      this.$el.html(this.template());
      //render a placeholder first

      // console.log('searchRecent collection length: ', this.collection.length);

      this.$el
        .find('#search-recent-details')
        .html(
          this.collection.map(function(item, historyIndex) {
            return new PreLinked.Views.SearchrecentitemView({
              model: item,
              historyIndex: historyIndex
            }).render().el;
          })
        );

      return this;
    }

});
