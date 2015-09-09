var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Resource = Agent.extend({

  init : function(cost, health, hitbox, team, brain) {
    this._super(cost, health, 0, hitbox, team, brain);

    this.superType = AgentType.agent.resource;
    this.type = AgentType.agent.resource;

  }

  // isAbleToPickUp : function(agent) {
  //   if(agent.superType === AgentType.agent.unit) {
  //     if(agent.type === AgentType.unit.picker) {
  //
  //     }
  //   }
  //
  //   return false;
  // }


});

module.export = Resource;
