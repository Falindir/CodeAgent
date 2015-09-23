var Class = require('uberproto');
var uuid = require('node-uuid');
var Environment = require('../environment/environment.js');

var Game = Class.extend({

  init : function(u1, t1, u2, t2, mapType, socket) {
    this.id = uuid.v1();
    this.env = Environment.create(mapType);
    this.env.addTeam(u1, t1);
    this.env.addTeam(u2, t2);

    this.tick = 0;
    this.interval = 60;
    this.time = null;

    this.run = false;

    this.socket = socket;
  },

  isSameGame : function(g2) {
    return this.id === g2.id;
  },

  update : function() {
    this.tick++; //TODO put tick in ENV
    this.env.setTick(this.tick);

    console.log("Game : " + this.id + " - Tick : " + this.tick);
    this.socket.emit('tick', this.tick);

    this.env.actionEveryTick();

    if(this.tick >= 3000) {
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


  },

  toString : function() {
    return "Game : " +
      "\n\tid : " + this.id +
      "\n\t" + this.env.toString();
  }



});

module.exports = Game;
