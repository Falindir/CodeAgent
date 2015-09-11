var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');
var Brain = require('../brain.js');

var UnitBrain = Brain.extend({

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
