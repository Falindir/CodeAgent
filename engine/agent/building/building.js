var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Building = Agent.extend({

  init : function(cost, armor, hitbox, team, brain, viewDistance, bag, bagType, bagSize) {
    this._super(cost, 1, armor, hitbox, team, brain);

    this.superType = AgentType.agent.building;
    this.type = AgentType.agent.building;
  }


});

module.export = Building;
