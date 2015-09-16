var Class = require('uberproto');
var AgentType = require('../../data/type.js');
var Agent = require('../agent.js');

var Resource = Agent.extend({

  init : function(hitbox, team, brain) {
    this._super(null, 1, 0, hitbox, team, brain);

    this.superType = AgentType.agent.resource;
    this.type = AgentType.agent.resource;


  }



});

module.exports = Resource;
