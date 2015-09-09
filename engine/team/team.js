var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var Team = Class.extend({

  init : function(name, user, game) {
    this.name = name;
    this.user = user;
    this.game = game;

    this.agents = LILI.Collections.Map.create();

    this.type = undefined;
  }

});

module.export = Team;
