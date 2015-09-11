var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var AgentType = require('../data/type.js');

var Environment = Class.extend({

  init : function(game) {
    this.game = game;
    this.agents = LILI.Collections.List();

    this.victoriousTeam = undefined;
  },

  getAgents : function() {
    return this.agents;
  },

  destroyAllAgentsDead : function () {
    for (var i = 0; i < this.agents.size; i++) {
      if(!this.agents.get(i).isAlive()){
        this.agents.remove(i);
      }
    }
  },

  resetEnv : function () {
    this.agents.clear();
  },

  actionEveryTick : function () {
    for (var i = 0; i < this.agents.size; i++) {
      this.agents.get(i).getBrain().actionEveryTick();
    }

    this.destroyAllAgentsDead();

    // TODO need refactor
    if(this.game.team1.getNumberOfAgent(AgentType.building.base) === 0) {
      this.victoriousTeam = this.game.team1;
    }
    else {
      if(this.game.team2.getNumberOfAgent(AgentType.building.base) === 0) {
        this.victoriousTeam = this.game.team2;
      }
    }
  },

  isGameOver : function() {
    return this.victoriousTeam !== undefined;
  }

});


module.export = Environment;
