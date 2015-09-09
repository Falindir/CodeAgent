var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Polygon2D = Class.extend({

  init : function() {

  }


});

var Rectangle2D = Polygon2D.extend({

  init : function(x, y, width, height) {
      this.points = LILI.Collections.List.create();
      this.width = width;
      this.height = height;
      this.radius2 = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
      var w2 = width / 2;
      var h2 = height / 2;
      this.points.add(LILI.Geometric.Point2D.create(x-w2,y+h2));
      this.points.add(LILI.Geometric.Point2D.create(x+w2,y+h2));
      this.points.add(LILI.Geometric.Point2D.create(x+w2,y-h2));
      this.points.add(LILI.Geometric.Point2D.create(x-w2,y-h2));
  },

  rotation : function(angle) {
    for (var i = 0; i < this.points.size; i++) {
      this.points.set(i, LILI.Geometric.rotationPoint2D(this.points.get(i), angle));
    }
  },

  translation : function(angle, distance) {

  },

  intersect : function(r2) {

  },

  toString : function () {
    return "Rectangle2D : " +
      "\n\t" + this.points.get(0).toString() +
      "\n\t" + this.points.get(1).toString() +
      "\n\t" + this.points.get(2).toString() +
      "\n\t" + this.points.get(3).toString();
  }


});

module.exports = Polygon2D;
module.exports = Rectangle2D;
