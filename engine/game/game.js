var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var uuid = require('node-uuid');

var Game = Class.extend({

  init : function(p1, p2) {
    this.id = uuid.v1();
    this.player1 = p1;
    this.player2 = p2;

    this.tick = 0;
    this.interval = 60;
    this.time = null;

    this.run = false;
  },

  isSameGame : function(g2) {
    return this.id === g2.id;
  },

  update : function() {
    this.tick++;

    console.log("Game : " + this.id + " - Tick : " + this.tick);

    if(this.tick >= 10000) {
      clearInterval(this.time);
      console.log("END GAME TIME OUT");
    }

  },

  start : function() {
    console.log("START GAME");
    var self = this;
    this.run = true;
    self.time = setInterval(function(){
      return self.update();
    }, 1000 / self.interval);
  },

  setInterval : function(value) {
    if(this.run) {
      clearInterval(this.time);
      this.interval = value;
      var self = this;
      self.time = setInterval(function(){
        return self.update();
      }, 1000 / self.interval);
    }
  },

  stop : function() {


  }



});

module.exports = Game;
