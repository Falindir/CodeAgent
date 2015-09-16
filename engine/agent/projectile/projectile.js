var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Projectile = Agent.extend({

  init : function(cost, hitbox, team, brain, radius, damage, agent) {
    this._super(cost, 1, 0, hitbox, team, brain);

    this.superType = AgentType.agent.projectile;
    this.type = AgentType.agent.projectile;

    this.radius = radius;
    this.damage = damage;
    this.agent = agent;
  },

  explode : function() {




    this.kill();
  }






});

module.exports = Projectile;
