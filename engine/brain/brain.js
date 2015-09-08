var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var Actions = require('../actions.js');

var Brain = Class.extend({

  init : function(agent) {
    this.agent = agent;
  },

  action : function() {

    // default action

    return this.nothing();
  }

});


module.export = Brain;
