/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionsitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/connectionsItem.hbs'],

  initialize: function(){
    this.Modal = (new PreLinked.Views.PmodalView()).pmodal;
  },

  events: {
    'click .modal-details': 'getModalConnectionDetails'
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  getModalConnectionDetails: function(events){
    events.preventDefault();
    var $target = $(events.target);
    var in_id = $target.closest('a').data('in-id');

    var details = new PreLinked.Models.ModalconnectiondetailsModel({
      id: in_id
    });

    details.fetch()
      .done(function(data){

        var detailsView = new PreLinked.Views.ModalconnectiondetailsView({
          model: data
        });

        // detailsView.model.something = 'her';
        // console.log('details view', detailsView.model);

        detailsView.getRelatedConnections(data).done(function(result) {
          console.log('promise working?', result);
          detailsView.model.interConnections = result;
          console.log('interrelated connections', detailsView.model.interConnections);

          var modal = new Backbone.FoundationModal({
            content: detailsView,
            allowCancel: false,
            okText: 'Close'
          });
          modal.open();
          //open modal
          console.log(data);
        });
      });
  }

});
