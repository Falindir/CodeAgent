var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');
var Projectile = require('./projectile.js');

var Rocket = Agent.extend({

  init : function(cost, hitbox, team, brain, radius, damage, agent) {
    this._super(cost, 1, 0, hitbox, team, brain, radius, damage, agent);
  },

});

module.exports = Rocket;
