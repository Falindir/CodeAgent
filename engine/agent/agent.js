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
    this.brain = brain;
    this.brain.setAgent(this); // TODO ritry last method .create(thid)
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
  },

  getDistanceFromAgent : function(agent2) {
    return this.hitbox.getDistance(agent2.hitbox);
  },

  kill : function() {
    this.currentHealth = 0;
  },

  collisions : function(object) {
    return this.hitbox.intersect(object.hitbox);
  },

  setPosition : function(x, y) {
    this.hitbox.setPosition(x,y);
  },

  toString : function(){
    var result = "Agent : " +
      "\n\tCost : " + this.cost +
      "\n\tHealth : " + this.health +
      "\n\tArmor : " + this.armor +
      "\n\tHeading : " + this.heading +
      "\n\tTeam : " + this.team.name +
      "\n\tBrain : " + this.brain.toString() +
      "\n\tSuperType : " + this.superType+
      "\n\tType : " + this.type +
      "\n\tX : " + this.hitbox.x +
      "\n\tY : " + this.hitbox.y;

      if (typeof this.bag != 'undefined') {
        result += "\n\tBag : " + this.bag.toString();
      }

      return result;
  }
});


module.exports = Agent;
