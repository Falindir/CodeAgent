var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Team = Class.extend({

  init : function(name, user, env) {
    this.name = name;
    this.user = user;
    this.env = env;

    this.agents = LILI.Collections.List.create();

    this.type = undefined;
  },

  getAgents : function() {
    return this.agents;
  },

  getAgentsByType : function(type) {
    var ags = LILI.Collections.List.create();

    for (var i = 0; i < this.agents.size; i++) {
      var a = this.agents.get(i);
      if(a.type === type) {
        ags.add(a);
      }
    }

    return ags;
  },

  getNumberOfAgent : function() {
    return this.getAgents().size;
  },

  getNumberOfAgentByType : function(type) {
    return this.getAgentsByType(type).size;
  },

  toString : function() {
    return "Team : " +
      "\n\t" + this.type +
      "\n\t" + this.name +
      "\n\t" + this.user;
  }

});

module.exports = Team;
