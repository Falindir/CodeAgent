var Class = require('uberproto');
var LILI = require('../../../lib/lili/lili.js');
var UnitBrain = require('./unit.js');

var SoldierBrain = UnitBrain.extend({

  init : function() {
    this.tickToReload = 0;
    this.numberTickForReload = 5; // TODO recup data of level
    this.reloaded = true;
    this.automaticReload = false;
    this.startReload = false;
  },

  fire : function() {
    if(this.isAbleToFire()) {
      this.reloaded = false;
      this.tickToReload = this.numberTickForReload;
      if(this.automaticReload) {
        this.reload();
      }
      this.agent.fire();
    }
  },

  reload : function() {
    if(this.isReloaded()) {
      this.startReload = true;
    }
  },

  actionEveryTick : function(){
    if(this.isAlive()) {
      if(this.startReload) {
        if(!this.isReloading()) {
          this.startReload = false;
          this.reloaded = true;
        }
        else {
          this.tickToReload--;
        }
      }
    }
  },

  isAbleToFire : function() {
    return !this.isReloading() && this.isReloaded();
  },

  isReloaded : function() {
    return this.reloaded;
  },

  isReloading : function() {
    return this.this.tickToReload > 0;
  }





});


module.exports = SoldierBrain;
