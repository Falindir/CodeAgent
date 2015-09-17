var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Unit = require('./unit.js');
var Bag = require('../tools/bag/bag.js');

var Picker = Unit.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance) {
    this._super(cost, health, armor, hitbox, team, brain, viewDistance);


    this.type = AgentType.unit.picker;

    this.bag = Bag.create(AgentType.resource.plant, 10);
  }
});

module.exports = Picker;
