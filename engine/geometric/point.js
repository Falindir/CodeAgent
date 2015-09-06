var Class = require('uberproto');

var Point2D = Class.extend({

  init : function(x, y) {
    this.x = x;
    this.y = y;
  },

  haveSameX : function (p2) {
    return this.x === p2.x;
  },

  haveSameY : function (p2) {
    return this.y === p2.y;
  },

  isSame : function (p2) {
    return this.haveSameX(p2) && this.haveSameY(p2);
  },

  set : function (p2) {
    this.x = p2.x;
    this.y = p2.y;
  },

  setLocation : function (x, y) {
    this.x = x;
    this.y = y;
  },

  distance : function (p2) {
    return Math.sqrt(Math.pow(p2.x - this.x) + Math.pow(p2.y - this.y));
  },

  toString : function() {
    return "Point : x = " + this.x + ", y = " + this.y + ";";
  }

});

module.exports = Point2D;
