var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var TeamType = require('../data/index.js').team;
var Team = require('./team.js');

var PlayerTeam = Team.extend({

  init : function(name, user, env) {
    this._super(name, user, env);
    this.type = TeamType.player;
  },

  isSameTeam : function(team2) {
    if(this.name === team2.name) {
      if(this.user.id === team2.name.id) {
        return true;
      }
    }

    return false;
  }

});

module.exports = PlayerTeam;
