var Class = require('uberproto');
var LILI = require('../../../lib/lili/lili.js');
var Brain = require('../brain.js');

var UnitBrain = Brain.extend({

  init : function() {

  },

  move : function() {
    if(this.agent.isAlive()) {
      this.agent.move();
    }
  }




});


module.exports = UnitBrain;
