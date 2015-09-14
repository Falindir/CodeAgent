var Type = {

  agent : {
    agent       : "AGENT",
    unit        : "UNIT",
    building    : "BUILDING",
    resource    : "RESOURCE",
    deposit     : "DEPOSIT",
    projectile  : "PROJECTILE"
  },

  unit : {
    observer  : "OBSERVER",
    builder   : "BUILDER",
    soldier   : "SOLDIER",
    healer    : "HEALER",
    defender  : "DEFENDER",
    picker    : "PICKER"
  },

  building : {
    base    : "BASE",
    wall    : "WALL",
    factory : "FACTORY",
    beacon  : "BEACON",
  },

  resource : {
    plant   : "PLANT",
    mineral : "MINERAL",
    darkmatter : "DARKMATTER"
  },

  item : {
    upgrade : "UPGRADE"
  }

  deposit : {
    field : "FIELD",
    mine  : "MINE"
  },

  projectile : {
    rocket  : "ROCKET",
    bomb    : "BOMB",
    missile : "MISSILE"
  },

  map : {
    default : "DEFAULT"
  }


};

module.exports = Type;
