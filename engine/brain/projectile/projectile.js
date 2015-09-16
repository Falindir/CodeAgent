var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');
var Brain = require('../brain.js');

var ProjectileBrain = Brain.extend({

  init : function() {

  },

  actionEveryTick : function(){
    if(this.isAlive()) {
      this.currentAutonomy--;
      this.agent.move();
    }
  }






});


module.exports = ProjectileBrain;
