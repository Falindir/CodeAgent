var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Hitbox = require('../geometric/hitbox.js');
var Zone = require('./zone.js');

var Map = Class.extend({

  init : function(width, height) {
    this.type = undefined;
    this.x = width / 2;
    this.y = height / 2;
    this.width = width;
    this.height = height;
    this.radius = LILI.Math.percentageCalculator(Math.min(this.width, this.height), -20) / 2;
    this.wall = LILI.Collections.List.create();
    this.zones = LILI.Collections.List.create();

    this.zonePlayerNotUse = LILI.Collections.List.create();
    this.zonePlayerUse = LILI.Collections.List.create();
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

  getZoneForBase : function(){
    var zoneP = null;
    var zone;
    var size = this.zonePlayerNotUse.size;
    if(size > 1) {
      var index = LILI.Math.random(1, size, true) - 1;
      zoneP = this.zonePlayerNotUse.get(index);
      this.zonePlayerNotUse.remove(index);
    }
    else {
      if(size === 1) {
        zoneP = this.zonePlayerNotUse.get(1);
        this.zonePlayerNotUse.remove(0);
      }
    }

    if(zoneP !== null) {
      this.zonePlayerUse.add(zoneP);
      var indexZ = LILI.Math.random(1, 3, true) - 1;
      zone = zoneP.get(indexZ);
    }

    return zone;
  },

  createZonePlayer : function() {

    var size = Math.sqrt(this.zones.size);

    var zp1 = LILI.Collections.List.create();
    zp1.add(this.zones.get(0));
    zp1.add(this.zones.get(1));
    zp1.add(this.zones.get(size));

    var zp2 = LILI.Collections.List.create();
    zp2.add(this.zones.get(size-2));
    zp2.add(this.zones.get(size-1));
    zp2.add(this.zones.get(2*size-1));

    var zp3 = LILI.Collections.List.create();
    zp3.add(this.zones.get(size*size - size - 1));
    zp3.add(this.zones.get(size*size - 1));
    zp3.add(this.zones.get(size*size - 2));

    var zp4 = LILI.Collections.List.create();
    zp4.add(this.zones.get(size*size - 2*size));
    zp4.add(this.zones.get(size*size - size));
    zp4.add(this.zones.get(size*size - size + 1));

    this.zonePlayerNotUse.add(zp1);
    this.zonePlayerNotUse.add(zp2);
    this.zonePlayerNotUse.add(zp3);
    this.zonePlayerNotUse.add(zp4);
  },

  createZone : function(size) {
    var id = 0;
    var sizeW = this.width / size;
    var sizeH = this.height / size;
    var x0 = -1 * (this.width / 2);
    var y0 = this.height / 2;

    for (var j = (y0 - (sizeH / 2)); j > (-1) * this.height / 2; j -= sizeH) {
      for (var i = (x0 + (sizeW / 2)); i < this.width / 2; i += sizeW) {
        id++;
        var zone = Zone.create(id, i, j, sizeW, sizeH);
        this.zones.add(zone);
      }
    }
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

    result += "\n\tZone : ";
    for (var z = 0; z < this.zones.size; z++) {
      result += "\n\t" + this.zones.get(z).toString();
    }

    return result;
  }
});


module.exports = Map;
