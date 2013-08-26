/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentView = Backbone.View.extend({

    template: JST['app/scripts/templates/searchRecent.hbs'],

    render: function() {
      this.$el.append(this.template);
    }

});
