var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Zone = Class.extend({

  init : function(id, x, y, width, height) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = LILI.Math.percentageCalculator(Math.min(this.width, this.height), -20);
  },

  getPointInRadius : function() {
    var origin = LILI.Geometric.Point2D.create(this.x, this.y);
    return LILI.Geometric.generatePoint2DInCircleZone(origin, this.radius, 0);
  },

  toString : function() {
    return "Zone : " +
      "\n\tId : " + this.id +
      "\n\tX : " + this.x +
      "\n\tY : " + this.y +
      "\n\tWidth : " + this.width +
      "\n\tHeight : " + this.height +
      "\n\tRadius : " + this.radius;
  }
});


module.exports = Zone;
