/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  render: function(){
    this.$el.append( this.template(this.model));
    return this;
  },

  getRelatedConnections: function(data){
      var deferred = $.Deferred();
    if(data.distance > 1) {
      console.log('get related connections called', data);
      console.log('relationship', data.relationToViewer.relatedConnections.values);
      var relationIDs = [];
      var relations = data.relationToViewer.relatedConnections.values;

      for(var i = 0; i < relations.length; i++) {
        relationIDs.push(relations[i].id);
      }
      console.log('relationIDs',relationIDs);

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
    }else{
      deferred.resolve([]);
    }
      return deferred.promise();
  }

});