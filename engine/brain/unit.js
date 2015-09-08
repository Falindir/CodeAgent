var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');

var UnitBrain = Class.extgend({

  init : function(agent) {
    this._super(agent);
  },

  move : function() {
    this.agent.move();
  }



});


module.export = UnitBrain;
