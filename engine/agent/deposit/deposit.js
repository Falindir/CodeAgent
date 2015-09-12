var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Deposit = Agent.extend({

  init : function(cost, health, hitbox, team, brain) {
    this._super(cost, health, 0, hitbox, team, brain);

    this.superType = AgentType.agent.deposit;
    this.type = AgentType.agent.deposit;
  }


});

module.exports = Deposit;
