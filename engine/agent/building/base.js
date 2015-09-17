var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Building = require('./building.js');
var Bag = require('../tools/bag/bag.js');

var Base = Building.extend({

  init : function(armor, hitbox, team, brain) {
    this._super(null, armor, hitbox, team, brain);
    this.type = AgentType.building.base;

    this.bagPlant = Bag.create(AgentType.resource.plant, 100);
    this.bagPlant.currentSize = 50;
    this.bagMineral = Bag.create(AgentType.resource.mineral, 100);
    this.bagMineral.currentSize = 50;
  }
});

module.exports = Base;
