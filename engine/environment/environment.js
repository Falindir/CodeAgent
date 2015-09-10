var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Environment = Class.extend({

  init : function(game) {
    this.game = game;
    this.agents = LILI.Collections.List();
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
  }

});


module.export = Environment;
