var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var TeamType = require('../data/index.js').team;
var AgentType = require('../data/index.js').type;

var MotherTeam = Class.extend({

  init : function(name, game) {
    this._super(name, null, game);
    this.type = TeamType.mother;

    this.agents.insert(AgentType.resource.plant, LILI.Collections.List.create());
    this.agents.insert(AgentType.resource.mineral, LILI.Collections.List.create());

    this.agents.insert(AgentType.deposit.field, LILI.Collections.List.create());
    this.agents.insert(AgentType.deposit.mine, LILI.Collections.List.create());

  },

  addResource : function() {

    
  }


});

module.export = PlayerTeam;
