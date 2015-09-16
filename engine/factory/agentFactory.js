var AgentType = require('../data/type.js');
var Unit = require('../agent/unit/index.js');
var UnitBrain = require('../brain/unit/index.js');
var Data = require('../data/index.js').data.agent;
var Resource = require('../agent/resource/index.js');
var ResourceBrain = require('../brain/resource/index.js');
var Hitbox = require('../geometric/hitbox.js');

function AgentFactory () {

  this.create = function(superType, type, team) {
    switch (superType) {
      case AgentType.agent.resource:
          return this.createResource(type, team);
      default:
    }

  };

  this.createUnit = function(type, team) {

    var unit;
    var datacenter = DataCenter.create();
    var data;

    switch (type) {
      case AgentType.unit.picker:
        break;
      case AgentType.unit.soldier:

        break;
      default:


      return agent;
    }


    return unit;

  };

  this.createBuilding = function(type, team) {

  };

  this.createField = function(type, team) {

  };

  this.createResource = function(type, team) {
    var dataResource = Data.resource;
    var resource;

    switch (type) {
      case AgentType.resource.plant:
        var Plant = Resource.plant;
        var dataPlant = dataResource.plant;
        var PlantBrain = ResourceBrain.plant.create();
        console.log(PlantBrain.toString());
        var hitboxPlant = Hitbox.create(0, 0, dataPlant.hitbox.width, dataPlant.hitbox.height);
        resource = Plant.create(hitboxPlant, team, PlantBrain);
        break;
      case AgentType.resource.mineral:
        var Mineral = Resource.mineral;
        var dataMineral = dataResource.mineral;
        var MineralBrain = ResourceBrain.mineral;
        var hitboxMineral = Hitbox.create(0, 0, dataMineral.hitbox.width, dataMineral.hitbox.height);
        resource = Plant.create(hitboxMineral, team, PlantBrain);
        break;
      default:
    }

    return resource;
  };

  this.createProjectile = function(type, team) {

  };

}

module.exports = AgentFactory;
