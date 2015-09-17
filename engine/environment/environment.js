var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
// var AgentType = require('../data/type.js');
var MotherTeam = require('../team/index.js').mother;
var PlayerTeam = require('../team/index.js').player;
var MapFactory = require('../factory/index.js').map;
var AgentType = require('../data/type.js');

var Environment = Class.extend({

  init : function(mapType) {
    this.teams = LILI.Collections.Map.create();
    this.mother = MotherTeam.create(this);
    this.teams.insert(this.mother.name, this.mother);
    this.victoriousTeam = undefined;
    this.map = (new MapFactory()).create(mapType);
    this.tick = 0;
  },

  setTick : function(tick) {
    this.tick = tick;
  },

  addTeam : function(user, team) {
    var nameTeam = team;

    if(this.teams.contains(team)) {
      var p = this.teams.getAllIndex(team).size;
      nameTeam = team + "-" + (p + 1);
    }

    this.teams.insert(nameTeam, PlayerTeam.create(user, nameTeam, this));
    var zone = this.map.getZoneForBase();
    var point = zone.getPointInRadius();
    this.addAgent(nameTeam, AgentType.agent.building, AgentType.building.base, point.x, point.y);


  },

  addAgent : function(team, superType, type, x, y) {
    this.teams.get(team).addAgent(superType, type, x, y);
  },

  getAgents : function() {
    var agents = LILI.Collections.List.create();

    for (var i = 0; i < this.teams.size; i++) {
      gents.addList(this.teams.getAgents, false);
    }

    return agents;
  },

  getAgentsByType : function(type){

  },

  getAgentsOfTeam : function(team) {
    return this.teams.get(team).getAgents();
  },

  destroyAllAgentsDead : function() {
    for (var i = 0; i < this.teams.size; i++) {
      this.teams.getContent(i).destroyAllAgentsDead();
    }
  },

  reset : function () {
    for (var i = 0; i < this.teams.size; i++) {
      this.teams.getContent(i).clear();
    }
  },

  actionEveryTick : function () {
    for (var i = 0; i < this.teams.size; i++) {
      this.teams.getContent(i).actionEveryTick();
    }

    this.destroyAllAgentsDead();

    // // TODO need refactor
    // if(this.game.team1.getNumberOfAgent(AgentType.building.base) === 0) {
    //   this.victoriousTeam = this.game.team1;
    // }
    // else {
    //   if(this.game.team2.getNumberOfAgent(AgentType.building.base) === 0) {
    //     this.victoriousTeam = this.game.team2;
    //   }
    // }
  },

  isGameOver : function() {
    return this.victoriousTeam !== undefined;
  },

  toString : function() {
    var result = "Environment : ";

    for (var i = 0; i < this.teams.size; i++) {
      result += "\n\t" + this.teams.getContent(i).toString();
    }

    //result += "\n\t" + this.map.toString();

    return result;
  }

});

module.exports = Environment;
