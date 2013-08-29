/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  events: {
    'click .exitModal': function() {
      $('.exitModal').foundation('reveal', 'close');
    }
  },

  render: function(){
    this.$el.append( this.template(this.model));
    return this;
  },

  // only call this funcito when distance > 1
  getRelatedConnections: function(data){
    if(data.distance > 1) {
      console.log('get related connections called', data);
      console.log('relationship', data.relationToViewer.relatedConnections.values);
      var relationIDs = [];
      var relations = data.relationToViewer.relatedConnections.values;

      for(var i = 0; i < relations.length; i++) {
        relationIDs.push(relations[i].id);
      }
      console.log('relationIDs',relationIDs);

      var deferred = $.Deferred();
      
      $.ajax({
        type: 'GET',
        url: '/persons/related',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {id: relationIDs},
        success: function(r) {
          console.log('success getRelatedConnections',r);
          deferred.resolve(r);
        },
        error: function(e) {
          console.log('some error in modalConnection',e);
          deferred.reject(e);
        }
      });
      return deferred.promise();
    }
    // get the related connections array from attributes
    // ajax that to /persons/related
    // on success: render every picutre with url
  }

});