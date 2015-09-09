var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');
var Resource = require('./index.js').resource;

var Plant = Resource.extend({

  init : function(cost, health, hitbox, team, brain) {
    this._super(cost, health, 0, hitbox, team, brain);

    this.type = AgentType.resource.plant;
  },

  isAbleToPickUp : function(agent) {
    if(agent.superType === AgentType.agent.unit) {
      if(agent.type === AgentType.unit.picker) {
        if(this.getDistanceFromAgent(agent) <= 20) { // TODO Data from picker max distance to pick plante
          return true;
        }
      }
    }

    return false;
  }


});

module.export = Plant;
