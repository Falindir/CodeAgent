var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var TeamType = require('../data/index.js').team;

var PlayerTeam = Class.extend({

  init : function(name, user, game) {
    this._super(name, user, game);
    this.type = TeamType.player;
  },

  isSameTeam : function(team2) {
    if(this.name === team2.name) {
      if(this.user.id === team2.name.id) {
        return true;
      }
    }

    return false;
  },

  duplicate : function() {
    return PlayerTeam.create(this.name+"-2", this.user, this.game);
  }

});

module.export = PlayerTeam;
