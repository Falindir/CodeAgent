var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
// var AgentType = require('../data/type.js');
var MotherTeam = require('../team/index.js').mother;
var PlayerTeam = require('../team/index.js').player;

var Environment = Class.extend({

  init : function() {
    this.teams = LILI.Collections.Map.create();
    this.mother = MotherTeam.create(this);
    this.teams.insert(this.mother.name, this.mother);
    this.victoriousTeam = undefined;
  },

  addTeam : function(user, team) {
    if(!this.teams.contains(team)) {
      this.teams.insert(team, PlayerTeam.create(user, team, this));
    }
    else {
      var p = this.teams.getAllIndex(team).size;
      var t = team + "-" + (p + 1);
      this.teams.insert(t, PlayerTeam.create(user, t, this));
    }

  },

  // getAgents : function() {
  //   return this.agents;
  // },
  //
  // destroyAllAgentsDead : function () {
  //   for (var i = 0; i < this.agents.size; i++) {
  //     if(!this.agents.get(i).isAlive()){
  //       this.agents.remove(i);
  //     }
  //   }
  // },
  //
  // resetEnv : function () {
  //   this.agents.clear();
  // },
  //
  // actionEveryTick : function () {
  //   for (var i = 0; i < this.agents.size; i++) {
  //     this.agents.get(i).getBrain().actionEveryTick();
  //   }
  //
  //   this.destroyAllAgentsDead();
  //
  //   // TODO need refactor
  //   if(this.game.team1.getNumberOfAgent(AgentType.building.base) === 0) {
  //     this.victoriousTeam = this.game.team1;
  //   }
  //   else {
  //     if(this.game.team2.getNumberOfAgent(AgentType.building.base) === 0) {
  //       this.victoriousTeam = this.game.team2;
  //     }
  //   }
  // },
  //
  // isGameOver : function() {
  //   return this.victoriousTeam !== undefined;
  // }

  toString : function() {
    var result = "Environment : ";

    for (var i = 0; i < this.teams.size; i++) {
      result += "\n\t" + this.teams.getContent(i).toString();
    }

    return result;
  }

});

module.exports = Environment;
