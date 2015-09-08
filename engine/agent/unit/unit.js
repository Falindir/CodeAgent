var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Bag = require('./tools/bag.js');
var AgentType = require('../data/type.js');

var Unit = Agent.extgend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance, bag, bagType, bagSize, speed) {
    this._super(cost, health, armor, hitbox, team, brain);

    this.viewDistance = viewDistance;
    this.bag = Bag.create(bagType, bagSize);
    this.superType = AgentType.agent.unit;
    this.type = AgentType.agent.unit;

    this.speed = speed;
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
