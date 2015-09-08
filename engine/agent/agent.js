var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Agent = Class.extend({

  init : function(cost, health, armor, hitbox, team, brain) {
    this.cost = cost;
    this.health = health;
    this.armor = armor;
    this.currentHealth = health;
    this.currentArmor = armor;
    this.heading = LILI.Math.random(0, 360, true);
    this.hitbox = hitbox;
    this.team = team;
    this.brain = brain.create(this);
    this.superType = AgentType.agent.agent;
    this.type = AgentType.agent.agent;
  },

  nothing : function() {
      /* nothin */
  },

  isAlive : function() {
    return this.currentHealth > 0;
  },

  haveArmor : function() {
    return this.currentArmor > 0;
  },

  action : function() {
    return this.brain.action();
  }
});


module.export = Agent;
