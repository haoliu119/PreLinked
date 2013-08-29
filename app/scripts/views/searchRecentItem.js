/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

    template: JST['app/scripts/templates/searchRecentItem.hbs'],

    renderAttr: function(){
      this.$el.append(this.template(this.model.attributes));
      return this;
    },

    render: function() {
      this.$el.append(this.template(this.model));
      return this;
    }

});
