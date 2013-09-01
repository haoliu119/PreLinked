(function($, _, Backbone) {

  var _setModalTemplate = function(options){
    //overwrite the default template
    //Set custom template settings
    var _interpolateBackup = _.templateSettings;
    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g,
      evaluate: /<%([\s\S]+?)%>/g
    };

    //http://jslinterrors.com/bad-escapement-of-eol-use-option-multistr-if-needed/
    /*jshint multistr: true */
    var template = _.template('\
      <% if (title) { %>\
        <div class="modal-header">\
          <% if (allowCancel) { %>\
            <a class="close-reveal-modal close">&times;</a>\
          <% } %>\
          <h3>{{title}}</h3>\
        </div>\
      <% } %>\
             \
      <div class="modal-body">{{content}}</div>\
             \
      <% if (footer) { %>\
        <div class="modal-footer right">\
          <% if (allowCancel) { %>\
            <% if (cancelText) { %>\
              <a href="#" class="button left cancel radius">{{cancelText}}</a>\
            <% } %>\
          <% } %>\
          <a href="#" class="button left ok radius success">{{okText}}</a>\
        </div>\
      <% } %>\
    ');

    //Reset to users' template settings
    _.templateSettings = _interpolateBackup;

    //OVERRIDE templates
    options.template = template;

    return options;
  };


  var Modal = Backbone.View.extend({

    className: 'modal reveal-modal',

    events: {
      'click .close': function(event) {
        event.preventDefault();

        this.trigger('cancel');

        if (this.options.content && this.options.content.trigger) {
          this.options.content.trigger('cancel', this);
        }

        this.close();
      },
      'click .cancel': function(event) {
        event.preventDefault();

        this.trigger('cancel');

        if (this.options.content && this.options.content.trigger) {
          this.options.content.trigger('cancel', this);
        }

        this.close();
      },
      'click .ok': function(event) {
        event.preventDefault();

        this.trigger('ok');

        if (this.options.content && this.options.content.trigger) {
          this.options.content.trigger('ok', this);
        }

        this.close();
      }
    },

    /**
     * Creates an instance of a Foundation Reveal Modal
     *
     * @see http://foundation.zurb.com/docs/components/reveal.html
     *
     * @param {Object} options
     * @param {String} [options.title]        Title. Default: none
     * @param {String|View} [options.content] Modal content. Default: none
     * @param {Boolean} [options.footer]      Whether the modal has a footer with two buttons
     * @param {String} [options.okText]       Text for the OK button. Default: 'OK'
     * @param {String} [options.cancelText]   Text for the cancel button. Default: 'Cancel'. If passed a falsey value, the button will be removed
     * @param {Boolean} [options.allowCancel] Whether the modal can be closed, other than by pressing OK. Default: true
     */
    initialize: function(options) {
      //set up template in a seperate function
      options = _setModalTemplate(options);

      this.options = _.extend({
        title: null,
        content: null,
        footer: true,
        okText: 'OK',
        cancelText: 'Cancel',
        allowCancel: true
      }, options);
    },

    /**
     * Creates the DOM element
     *
     * @api private
     */
    render: function() {
      var content = this.options.content;

      //Create the modal container
      this.$el.html(
        this.options.template(this.options)
      );

      //Insert the main content if it's a view
      if (content.$el) {
        content.render();
        this.$el
          .find('.modal-body')
          .html(content.$el);
      }

      this.isRendered = true;

      return this;
    },

    /**
     * Renders and shows the modal
     *
     * @param {Function} [callback]     Optional callback that runs only when OK is pressed.
     */
    open: function(callback) {
      if (!this.isRendered){
        this.render();
      }

      //Foundation requires appending to the bottom of the body
      $('body').append(this.$el);
      this.$el.foundation('reveal', 'open');

      //Run callback on OK if provided
      var that = this;
      if (callback) {
        that.on('ok', callback);
      }

      return this;
    },

    /**
     * Closes the modal
     */
    close: function() {
      this.$el.foundation('reveal', 'close');
      this.remove();
    }

  });

  //Now export this to Backbone.FoundationModal

    //for CommonJS
  if (typeof require === 'function' && typeof module !== 'undefined' && exports ) {
    module.exports = Modal;
  } else if (typeof define === 'function' && define.amd ) {
    //for AMD / RequireJS
    return define(function(){
      Backbone.FoundationModal = Modal;
    });
  } else {
    //for regular
    Backbone.FoundationModal = Modal;
  }

})(jQuery, _, Backbone);