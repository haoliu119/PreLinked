/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function(options) {
    this.jobQuery = options.jobQuery;
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click .sortAsc': 'sortCollectionAsc',
    'click .sortDesc': 'sortCollectionDesc'
  },

  sortCollectionAsc: function(events){
    events.preventDefault();
    this.collection.comparator = function (model) {
      return parseFloat( model.get('pScore') );
    };
    this.collection.sort();
    this.render();
  },

  sortCollectionDesc: function(events){
    events.preventDefault();
    this.collection.comparator = function (model) {
      return -1 * parseFloat( model.get('pScore') );
    };
    this.collection.sort();
    this.render();
  },

  render: function() {
    var titleString = this.titleString();
    this.$el.html(this.template(
      {jobCount: this.collection.length,
        jobTitle: titleString }
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
    this.delegateEvents();
    return this;
  },

  titleString: function(){
    var string = "";
    var titles = this.jobQuery.attributes.jobTitle;

    for(var i = 0; i < titles.length; i++) {
      string += titles[i];
      if (i !== titles.length - 1 ){
        string += ", ";
      }
    }
    return string;
  }
});
