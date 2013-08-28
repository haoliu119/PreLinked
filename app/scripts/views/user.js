/*global PreLinked, Backbone, JST*/

PreLinked.Views.UserView = Backbone.View.extend({
  tagName: 'ul',
  className: 'right',

  template: JST['app/scripts/templates/user.hbs'],

  render: function() {
    this.$el.html(this.template(this.model.attributes.inPerson));
    return this;
  }
});
