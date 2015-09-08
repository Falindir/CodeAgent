var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');

var UnitBrain = Class.extend({

  init : function(agent) {
    this._super(agent);
  },

  move : function() {
    if(this.agent.isAlive()) {
      this.agent.move();
    }
  }



});


module.export = UnitBrain;
