var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Unit = require('./unit.js');

var Picker = Unit.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance) {
    this._super(cost, health, armor, hitbox, team, brain, viewDistance);


    this.type = AgentType.unit.picker;
  }



});

module.exports = Picker;
