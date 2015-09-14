var LILI = require('../../../lib/lili/lili.js');
var AgentType = require('../../data/type.js');
var Building = require('./building.js');
var UnitFactory = require('../../factory/index.js').unit;

var BaseBuilding = Agent.extend({

  init : function(cost, armor, hitbox, team, brain, listAgent) {
    this._super(cost, 1, armor, hitbox, team, brain);

    this.type = AgentType.building.base;

    this.listAgent = listAgent; // agent type who are creable by Base
  },

  create : function(unitType) {
    return (new UnitFactory()).create(unitType, this.team);
  },

  toString : function() {
    return this._super.toString();
  }
});

module.exports = Building;
