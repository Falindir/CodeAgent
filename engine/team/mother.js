var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');
var TeamType = require('../data/index.js').team;
var Team = require('./team.js');

var MotherTeam = Team.extend({

  init : function(env) {
    this._super("MOTHER_IA", -1, env);
    this.type = TeamType.mother;
    this.popPlant = 100;
  },

  actionEveryTick : function () {
    if(this.env.tick % this.popPlant === 0) {
      var origin = LILI.Geometric.Point2D.create(0,0);
      var point = LILI.Geometric.generatePoint2DInCircleZone(origin, this.env.map.radius, 0);
      // TODO create plant

      
    }
  }


});

module.exports = MotherTeam;
