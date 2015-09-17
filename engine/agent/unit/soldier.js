var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Unit = require('./unit.js');

var Soldier = Unit.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance) {
    this._super(cost, health, armor, hitbox, team, brain, viewDistance);


    this.type = AgentType.unit.soldier;
  },

  fire : function() {
    //TODO finish
    //var rocket = (new UnitFactory()).create(AgentType.projectile.rocket);
    //rocket.live(this);
  }




});

module.exports = Soldier;
