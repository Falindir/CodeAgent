var Class = require('uberproto');
var LILI = require('../../../lib/lili/lili.js');
var AgentType = require('../../data/type.js');
var Agent = require('../agent.js');

var Unit = Agent.extend({

  init : function(cost, health, armor, hitbox, team, brain, viewDistance, speed) {
    this._super(cost, health, armor, hitbox, team, brain);

    this.viewDistance = viewDistance;
    this.superType = AgentType.agent.unit;
    this.type = AgentType.agent.unit;

    this.speed = speed;
  },

  viewAgent : function(agent2) {
    return this.viewDistance >= this.getDistanceFromAgent(agent2);
  },

  getAllAgentsView : function() {
    var agents = LILI.Collections.List();
    for (var i = 0; i < this.env.getAgents().size; i++) {
      var a = this.env.getAgents().get(i);
      if(a.isAlive()){
        if(this.viewAgent(a)) {
          agents.add(a);
        }
      }
    }
  },

  getAllAgentsViewByType : function(type) {
    var agents = this.getAllAgentsView();
    var agentsFilted = LILI.Collections.List();
    for (var i = 0; i < agents.size; i++) {
      var a = agents.get(i);
      if(a.type === type){
        agentsFilted.add(a);
      }
    }
    return agentsFilted;
  },

  move : function() {
      this.hitbox.translation(this.heading, this.speed);
  }
});

module.exports = Unit;
