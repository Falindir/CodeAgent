var Class = require('uberproto');
var LILI = require('../../../lib/lili/lili.js');
var AgentType = require('../data/type.js');
var Deposit = require('./index.js').deposit;
var Plant = require('../resource/index.js').plant;

var Field = Deposit.extend({

  init : function(cost, health, hitbox, team, brain, zoneDistance) {
    this._super(cost, health, 0, hitbox, team, brain);

    this.type = AgentType.deposit.field;

    this.zoneDistance = zoneDistance;
  },

  create : function() {
    // var Plant = PlantFactory.create(this.)

  }




});

module.exports = Field;
