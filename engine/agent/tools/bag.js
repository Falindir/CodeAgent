var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Bag = Class.extend({

  init : function(element, size) {
      this.element = element;
      this.size = size;
      this.currentSize = 0;
  },

  isEmpty : function() {
    return this.currentSize === 0;
  },

  isFull : function() {
    return this.currentSize === this.size;
  }

});

module.export = Bag;
