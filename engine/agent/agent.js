var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Bag = require('./tools/bag.js');
var Brain =

var Agent = Class.extgend({

  init : function(cost, health, armor, hitbox, team, viewDistance, bag, elementBag, elementSize) {
    this.cost = cost;
    this.health = health;
    this.armor = armor;
    this.currentHealth = health;
    this.currentArmor = armor;
    this.heading = this.heading = LILI.Math.random(0, 360, true);

    this.hitbox = hitbox;

    this.team = team;

    this.viewDistance = viewDistance;

    this.bag = Bag.create(elementBag, elementSize);
  },

  isAlive : function() {
    return this.currentHealth > 0;
  },

  haveArmor : function() {
    return this.currentArmor > 0;
  },

  getDistanceFromAgent : function(agent2) {
    return this.hitbox.getDistance(agent2.hitbox);
  },

  getActions : function() {
    return this.brain.action();
  }






});


module.export = Agent;
