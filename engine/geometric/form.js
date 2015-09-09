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

  calculNewPoint : function(index, angle) {
    var point = this.points.get(index);
    var x = point.x*Math.cos(angle) - point.y*Math.sin(angle);
    var y = point.x*Math.sin(angle) + point.y*Math.cos(angle);
    return LILI.Geometric.Point2D.create(x, y);
  },

  rotation : function(origin, angle) {
    var p1 = this.calculNewPoint(0, angle);
    var p2 = this.calculNewPoint(1, angle);
    var p3 = this.calculNewPoint(2, angle);
    var p4 = this.calculNewPoint(3, angle);

    this.points.set(0, p1);
    this.points.set(1, p2);
    this.points.set(2, p3);
    this.points.set(3, p4);
  },

  translation : function(angle, distance) {

  },

  intersect : function(r2) {

  },

  toString : function () {
    return "Rectangle2D : \n\t" + this.points.get(0).toString() +
      "\n\t" + this.points.get(1).toString() +
      "\n\t" + this.points.get(2).toString() +
      "\n\t" + this.points.get(3).toString();
  }


});

module.exports = Polygon2D;
module.exports = Rectangle2D;
