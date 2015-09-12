var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../../data/type.js');
var Unit = require('./unit.js');

var Builder = Unit.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance, bagType, bagSize, speed) {
    this._super(cost, health, armor, hitbox, team, brain, viewDistance, speed);


    this.type = AgentType.unit.builder;
  }




});

module.exports = Builder;
