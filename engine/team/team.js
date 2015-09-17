var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentFactory = require('../factory/index.js').agent;

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

  getAgentInRadiusOfAgent : function(agent, radius) {
    var agentsRadius = LILI.Collections.List();

    for (var i = 0; i < this.agents.size; i++) {
      var agt = this.agents.get(i);
      if(agt.getDistanceFromAgent(agent)) {
        agentsRadius.add(agt);
      }
    }
  },

  destroyAllAgentsDead : function () {
    for (var i = 0; i < this.agents.size; i++) {
      if(!this.agents.get(i).isAlive()){
        this.agents.remove(i);
      }
    }
  },

  clear : function() {
    this.agents.clear();
  },

  addAgent : function(superType, type, x, y) {
    var agent = (new AgentFactory()).create(superType, type, this);
    agent.setPosition(x, y);
    this.agents.add(agent);
  },

  actionEveryTick : function () {

  },

  toString : function() {
    var result = "Team : " +
      "\n\tType : " + this.type +
      "\n\tName : " + this.name +
      "\n\tUser : " + this.user +
      "\n\tAgents : " + this.agents.size;

    for (var i = 0; i < this.agents.size; i++) {
      result += this.agents.get(i).toString();
    }

    return result;
  }

});

module.exports = Team;
