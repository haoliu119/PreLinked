/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionsitemView = Backbone.View.extend({

    template: JST['app/scripts/templates/connectionsItem.hbs'],

    render: function() {
      this.$el.append(this.template(this.model));
      return this;
    }
});
