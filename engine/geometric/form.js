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

  getPoints : function(){
    return this.points;
  },

  size : function(){
    return 4;
  },

  rotation : function(angle) {
    for (var i = 0; i < this.points.size; i++) {
      this.points.set(i, LILI.Geometric.rotationPoint2D(this.points.get(i), angle));
      this.points.get(i).round(5);
    }
  },

  translation : function(angle, distance) {
    for (var i = 0; i < this.points.size; i++) {
      LILI.Geometric.translationPoint2D(this.points.get(i), angle, distance);
      this.points.get(i).round(5);
    }
  },

  intersect : function(r2) {

    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (x = 0; x < 2; x++) {

      var polygon = (x===0) ? this : r2;

      for (i1 = 0; i1 < polygon.size(); i1++) {

        var i2 = (i1 + 1) % polygon.size();
        var p1 = polygon.getPoints().get(i1);
        var p2 = polygon.getPoints().get(i2);

        var normal = LILI.Geometric.Point2D.create(p2.y - p1.y, p1.x - p2.x);

        minA = maxA = undefined;

        var a = this.getPoints();
        var b = r2.getPoints();

        for (j = 0; j < a.size; j++) {
          projected = normal.x * a.get(j).x + normal.y * a.get(j).y;
          if (LILI.isUndefined(minA) || projected < minA) {
            minA = projected;
          }
          if (LILI.isUndefined(maxA) || projected > maxA) {
            maxA = projected;
          }
        }

        minB = maxB = undefined;
        for (j = 0; j < b.size; j++) {
          projected = normal.x * b.get(j).x + normal.y * b.get(j).y;
          if (LILI.isUndefined(minB) || projected < minB) {
            minB = projected;
          }
          if (LILI.isUndefined(maxB) || projected > maxB) {
            maxB = projected;
          }
        }

        if (maxA < minB || maxB < minA) {
          return false;
        }
      }
    }

    return true;
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
