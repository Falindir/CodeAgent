var Class = require('uberproto');

var LILI = LILI || {};

LILI.VERSION = "v0.1.0";

LILI.AUTHOR = "Falindir";

LILI.sayHello = function () { // for server not client
  console.log('Lili.ls : ' + LILI.VERSION + " - author : " + LILI.AUTHOR);
};

LILI.isUndefined = function(val) {
  return typeof(val) === "undefined";
};

LILI.Collections = {};

LILI.Collections.List = Class.extend({

  init : function() {
    this.collections = [];
    this.size = 0;
  },

  clear : function () {
    this.collections = [];
    this.size = 0;
  },

  add : function (value) {
    this.collections.push(value);
    this.size += 1;
  },

  get : function (index) {
    return this.collections[index];
  },

  last : function () {
    if(this.collections.length === 0)
      return undefined;
    else
      return this.collections[this.collections.length - 1];
  },

  set : function (index, value) {
    this.collections[index] = value;
  },

  remove : function (index) {
    this.collections.splice(index, 1);
    if(this.size > 0)
      this.size -= 1;
  },

  contains : function (value) {
    for (i = 0; i < this.collections.length; i++)
      if(this.collections[i] === value)
        return true;

    return false;
  },

  getFirstIndex : function (value) {
    for (i = 0; i < this.collections.length; i++)
      if(this.collections[i] === value)
        return i;

    return undefined;
  },

  getAllIndex : function (value) {
    var index = new LILI.Collections.List();

    for (i = 0; i < this.collections.length; i++)
      if(this.collections[i] === value)
        index.add(i);

    return index;

  },

  getLastIndex : function (value) {
    var listVal = this.getAllIndex(value);

    if(listVal.size === 0)
      return undefined;

    return listVal.last();
  },

  getInterval : function (start, end) {
    var interval = new LILI.Collections.List();

    for (i = start; i <= end; i++) {
      interval.add(this.get(i));
    }

    return interval;
  },

  addTab : function (tab, reset) {
    if(reset)
      this.clear();

    for(var i = 0; i < tab.length; i++)
      this.add(tab[i]);
  },

  addList : function (list, reset) {
    if(reset)
      this.clear();

    for(var i = 0; i < list.size; i++)
      this.add(list.get(i));
  }
});

LILI.Collections.Map = Class.extend({

  init : function() {
    this.keys = new LILI.Collections.List();
    this.values = new LILI.Collections.List();
    this.size = 0;
  },

  clear : function() {
    this.keys.clear();
    this.values.clear();
    this.size = 0;
  },

  insert : function (key, value) {
    if(!this.keys.contains(key)) {
      this.keys.add(key);
      this.values.add(value);
      this.size += 1;
    }
  },

  get : function (key) {
    if(this.keys.contains(key)) {
      return this.values.get(this.keys.getIndex(key));
    }

    return null;
  },

  getContent : function (index) {

    if(index < this.size) {
      var key = this.keys.get(index);
      var value = this.values.get(index);
      var content = new MapContent(key, value);
      return content;
    }

    return null;

  },

  remove : function (key) {
    if(this.keys.contains(key)) {
      var index = this.keys.getIndex(key);
      this.keys.remove(index);
      this.values.remove(index);
      this.size -= 1;
    }
  },

  contains : function (key) {
    return this.keys.contains(key);
  }
});

LILI.Math = {};

LILI.Math.random = function (low, high, round) {
  if(round)
    return Math.round(Math.random() * (high - low) + low);

  return Math.random() * (high - low) + low;
};

LILI.Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
LILI.Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

LILI.Geometric = {};

LILI.Geometric.generatePoint2DInCircleZone = function(origin, radius, minDist) {

  var angle = Math.random()*Math.PI * 2;

  var px = Math.cos(angle)*(radius - minDist) + minDist + origin.x;
  var py = Math.sin(angle)*(radius - minDist) + minDist + origin.y;

  var p = LILI.Geometric.Point2D.create(Math.round(px), Math.round(py));

  if(p.distance(origin) < minDist) // securiy
    return LILI.Geometric.generatePointInCircleZone(origin, radius, minDist);

  return p;
};

//TODO NEED REFACTOR;
LILI.Geometric.rotationPoint2D = function(point, angle) {
  var x = point.x*Math.cos(angle) - point.y*Math.sin(angle);
  var y = point.x*Math.sin(angle) + point.y*Math.cos(angle);
  return LILI.Geometric.Point2D.create(x, y);
};

LILI.Geometric.translationPoint2D = function(point, angle, distance) {
  point.x += distance * Math.cos(angle);
  point.y += distance * Math.sin(angle);
};

LILI.Geometric.Point2D = Class.extend({

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

  round : function(preci) {
    var r = Math.pow(10, preci);
    this.x = Math.round(this.x * r) / r;
    this.y = Math.round(this.y * r) / r;
  },

  toString : function() {
    return "Point : x = " + this.x + ", y = " + this.y + ";";
  }

});


module.exports = LILI;
