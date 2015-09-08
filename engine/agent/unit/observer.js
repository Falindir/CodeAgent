var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../../data/type.js');
var Unit = require('./unit.js');

var Observer = Unit.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance, bagType, bagSize, speed) {
    this._super(cost, health, armor, hitbox, team, brain, viewDistance, speed);

    //TODO finish
    //var bag = BagFactory.create(BagType.)
    //this.bag = bag.create(bagType, bagSize);

    this.type = AgentType.unit.observer;
  },




});

module.export = Unit;
