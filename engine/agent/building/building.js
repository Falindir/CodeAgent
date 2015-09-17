var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Agent = require('../agent.js');

var Building = Agent.extend({

  init : function(cost, armor, hitbox, team, brain) {
    this._super(cost, 1, armor, hitbox, team, brain);

    this.superType = AgentType.agent.building;
    this.type = AgentType.agent.building;
  }


});

module.exports = Building;
