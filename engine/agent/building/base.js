var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Building = require('./building.js');

var Base = Building.extend({

  init : function(armor, hitbox, team, brain) {
    this._super(null, armor, hitbox, team, brain);
    this.type = AgentType.building.base;
  }
});

module.exports = Base;
