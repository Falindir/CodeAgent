var Class = require('uberproto');

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
  },

  toString : function() {
    return "Bag : " +
      "\n\tElement : " + this.element +
      "\n\tSize : " + this.size +
      "\n\tCur : " + this.currentSize;
  }

});

module.exports = Bag;
