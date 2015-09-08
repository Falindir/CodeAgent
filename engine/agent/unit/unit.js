var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Bag = require('./tools/bag.js');
var AgentType = require('../../data/type.js');
var Tier = require('../../data/tiers.js');

var Unit = Agent.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance, speed) {
    this._super(cost, health, armor, hitbox, team, brain);

    this.viewDistance = viewDistance;
    this.superType = AgentType.agent.unit;
    this.type = AgentType.agent.unit;

    this.speed = speed;

    this.tier = Tier.unit.T1;
  },

  getDistanceFromAgent : function(agent2) {
    return this.hitbox.getDistance(agent2.hitbox);
  },

  viewAgent : function(agent2) {
    return this.viewDistance >= this.getDistanceFromAgent(agent2);
  },

  move : function() {
      this.hitbox.translation(this.heading, this.speed);
  }
});

module.export = Unit;
