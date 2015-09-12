var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');

var Brain = Class.extend({

  init : function(agent) {
    this.agent = agent;
  },

  actionEveryTick : function() {

    // default action

    return this.nothing();
  },

  isAlive : function() {
    return this.agent.isAlive();
  }

});


module.exports = Brain;
