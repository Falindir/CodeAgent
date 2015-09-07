
var Class = require('uberproto');
var Rectangle = require('./form.js').Rectangle;

var Hitbox = Class.extend({

    init : function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.contener = Rectangle.create(x, y, width, height);

    }


});

module.exports = Hitbox;
