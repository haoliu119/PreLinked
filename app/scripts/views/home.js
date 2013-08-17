/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({

  //template: JST['app/scripts/templates/home.hbs'],
  template: Handlebars.compile($("#template-home").html()),

  render: function() {
    var homeModel = new PreLinked.Models.HomeModel();
    this.$el.html(this.template);

    return this;
  }

});
