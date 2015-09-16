var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Brain = Class.extend({

  init : function() {
    this.agent = undefined;
  },

  setAgent : function(agent) {
    this.agent = agent;
  },

  isAlive : function() {
    return this.agent.isAlive();
  },

  toString : function() {
    return "Brain : " +
      "\n\tAgent : A";
  }

});


module.exports = Brain;
