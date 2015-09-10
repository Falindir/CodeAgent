
var Class = require('uberproto');
var Rectangle2D = require('./form.js');
var LILI = require('../../lib/lili/lili.js');

var Hitbox = Class.extend({

    init : function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.contener = Rectangle2D.create(x, y, width, height);
    },

    translation : function(alpha, distance) {

        var alphaR = LILI.Math.radians(alpha);

        var B = distance * Math.cos(alphaR);
        var A = distance * Math.sin(alphaR);

        this.x += B;
        this.y += A;

        // TODO finish
        this.contener.translation(alphaR, distance);
    },

    rotation : function(alpha) {
      var alphaR = LILI.Math.radians(alpha);
      this.contener.rotation(alphaR);
    },

    intersect : function(hitbox2) {
      return this.contener.intersect(hitbox2.contener);
    },

    getPosition : function() {
      return LILI.Geometric.Point2D.create(this.x, this.y);
    },

    toString : function() {
      return "Hitbox : " + this.x + ", " + this.y +
        "\n\t" + this.contener.toString();
    }



});

module.exports = Hitbox;
