var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Resource = require('./resource.js');

var Mineral = Resource.extend({

  init : function(hitbox, team, brain) {
    this._super(hitbox, team, brain);

    this.type = AgentType.resource.mineral;
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

module.exports = Mineral;
