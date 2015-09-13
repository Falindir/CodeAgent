var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Hitbox = require('../geometric/hitbox.js');

var Map = Class.extend({

  init : function(width, height, env) {
    this.type = undefined;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.env = env;
    this.wall = LILI.Collections.List.create();
  },

  createWall : function() {
    var w1 = Hitbox.create( 0, this.height / 2 + 1, this.width + 4, 2);
    var w2 = Hitbox.create( this.width / 2 + 1, 0, 2, this.height + 4);
    var w3 = Hitbox.create( 0, -1 * (this.height / 2 + 1) , this.width + 4, 2);
    var w4 = Hitbox.create( -1 * (this.width / 2 + 1), 0, 2, this.height + 4);

    this.wall.add(w1);
    this.wall.add(w2);
    this.wall.add(w3);
    this.wall.add(w4);
  },

  collitions : function(object) {
    for (var i = 0; i < this.wall.size; i++) {
      if(this.wall.get(i).intersect(object.hitbox)){
        return true;
      }
    }

    return false;
  },

  toString : function() {
    var result = "Map : " +
      "\n\tType : " + this.type +
      "\n\tX : " + this.x +
      "\n\tY : " + this.y +
      "\n\tWidth : " + this.width +
      "\n\tHeight : " + this.height +
      "\n\tWall : ";

    for (var i = 0; i < this.wall.size; i++) {
      result += "\n\t" + this.wall.get(i).toString();
    }

    return result;
  }
});


module.exports = Map;
