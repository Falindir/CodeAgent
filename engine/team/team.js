var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Team = Class.extend({

  init : function(name, user, game) {
    this.name = name;
    this.user = user;
    this.game = game;

    this.agents = LILI.Collections.Map.create();

    this.type = undefined;
  },

  getNumberOfAgent : function(type) {
    return 0; // TODO finish
  }

});

module.export = Team;
