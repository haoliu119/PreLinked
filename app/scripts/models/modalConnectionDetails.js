/*global PreLinked, Backbone*/

PreLinked.Models.ModalconnectiondetailsModel = Backbone.Model.extend({
  urlRoot: '/people/',

  initialize: function (options) {
    // if(options && options.id){
    //   this.url = this.url + options.id;
    // }
    console.log('ModalconnectiondetailsModel', this.url());
  }
});
