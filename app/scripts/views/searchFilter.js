/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  events: {
    'keypress .searchInput': 'addSearchFilter',
    'click .removeFilter': 'removeSearchFilter'
  },

  addSearchFilter: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();

      var jobTitle = this.$el.find('input[name="job-title"]')[0].value;
      var jobLocation = this.$el.find('input[name=job-location]')[0].value
      var jobKeywords = this.$el.find('input[name="job-keywords"]')[0].value;

      this.model.trigger('addSearchFilter', e, jobTitle, jobLocation, jobKeywords);
      this.render();
    }
  },

  removeSearchFilter: function(e) {
    console.log('remove');
    this.model.trigger('removeSearchFilter', e);
    this.render();
  },

  render: function () {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});