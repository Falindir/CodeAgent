var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var TeamType = require('../data/index.js').team;
var Team = require('./team.js');

var MotherTeam = Team.extend({

  init : function(env) {
    this._super("MOTHER_IA", -1, env);
    this.type = TeamType.mother;


  }


});

module.exports = MotherTeam;
