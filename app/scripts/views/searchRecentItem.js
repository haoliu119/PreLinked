/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

    template: JST['app/scripts/templates/searchRecentItem.hbs'],

    render: function() {
      var data = this.model.attributes || this.model;
      this.$el.append( this.template(data) );
      return this;
    }

});
