
var Class = require('uberproto');
var Rectangle = require('./form.js').Rectangle;
var LILI = require('../../lib/lili/lili.js');

var Hitbox = Class.extend({

    init : function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.contener = Rectangle.create(x, y, width, height);
    },

    translation : function(alpha, distance) {

        var alphaR = LILI.Math.radians(alpha);

        var B = distance * Math.cos(alphaR);
        var A = distance * Math.sin(alphaR);

        this.x += B;
        this.y += A;

        // TODO finish
        this.contener.translation(alpha, distance);
    },

    rotation : function(angle) {
      var alphaR = LILI.Math.radians(alpha);
      this.contener.rotation(this.getPosition(), alphaR);
    },

    getPosition : function() {
      return LILI.Geometric.Point2D.create(this.x, this.y);
    }



});

module.exports = Hitbox;
