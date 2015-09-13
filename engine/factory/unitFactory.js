var AgentType = require('../data/type.js');

var Unit = require('../agent/unit/index.js');
var UnitBrain = require('../brain/unit/index.js');

function UnitFactory () {

  this.create = function(type, team) {

    var unit;
    var datacenter = DataCenter.create();
    var data;

    switch (type) {
      case AgentType.unit.observer:
        //data = datacenter.getData(AgentType.agent.unit, AgentType.unit.observer);
        //unit = Unit.observer.create(data.cost, data.health, data.armor, , team, UnitBrain.observer);
        break;
      default:

    }


    return unit;

  };

}

module.exports = UnitFactory;
