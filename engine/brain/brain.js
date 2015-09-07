var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');

var Brain = Class.extgend({

  init : function(agent) {
    this.agent = agent;
  },

  action : function() {
    return this.idle();
  },

  idle : function() {
    return Actions.IDLE;
  },

  move : function() {
    return Actions.MOVE;
  }



});


module.export = Brain;
