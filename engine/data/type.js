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
    mineral : "MINERAL"
  },

  deposit : {
    field : "FIELD",
    mine  : "MINE"
  },

  projectile : {
    rocket  : "ROCKET",
    bomb    : "BOMB"
  }


};

module.export = Type;
