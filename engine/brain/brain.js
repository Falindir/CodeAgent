var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Brain = Class.extend({

  init : function(agent) {
    this.agent = agent;
  },

  isAlive : function() {
    return this.agent.isAlive();
  }

});


module.exports = Brain;
