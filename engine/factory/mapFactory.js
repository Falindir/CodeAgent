var Type = require('../data/type.js');

var Map = require('../map/map.js');


function MapFactory () {

  this.create = function(type, env) {

    var map;

    switch (type) {
      case Type.map.default:
          map = Map.create(1000, 800, env);
          map.createWall();
        break;
      default:
          map = Map.create(1000, 800, env);
          map.createWall();
    }


    return map;

  };

}

module.exports = MapFactory;