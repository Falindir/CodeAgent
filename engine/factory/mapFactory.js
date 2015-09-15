var Type = require('../data/type.js');
var Map = require('../map/map.js');


function MapFactory () {

  this.create = function(type, env) {

    var map;

    switch (type) {
      case Type.map.default: // TODO no pass
          map = Map.create(800, 800);
          map.createZone(5);
        break;
      default:
          map = Map.create(800, 800);
          map.createZone(5);
    }

    map.createWall();

    return map;

  };

}

module.exports = MapFactory;
