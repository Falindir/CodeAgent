var AgentType = require('../data/type.js');
var Unit = require('../agent/unit/index.js');
var UnitBrain = require('../brain/unit/index.js');
var Data = require('../data/index.js').data.agent;
var Resource = require('../agent/resource/index.js');
var ResourceBrain = require('../brain/resource/index.js');
var Building = require('../agent/building/index.js');
var BuildingBrain = require('../brain/building/index.js');
var Hitbox = require('../geometric/hitbox.js');

function AgentFactory () {

  this.create = function(superType, type, team) {
    switch (superType) {
      case AgentType.agent.resource:
        return this.createResource(type, team);
      case AgentType.agent.building:
        return this.createBuilding(type, team);
      case AgentType.agent.unit:
        return this.createUnit(type, team);
      default:
    }

  };

  this.createUnit = function(type, team) {
    var dataUnit = Data.unit;
    var unit;

    switch (type) {
      case AgentType.unit.picker:
        var Picker = Unit.picker;
        var dataPicker = dataUnit.picker;
        var PickerBrain = UnitBrain.picker.create();
        var hitboxPicker = Hitbox.create(0, 0, dataPicker.hitbox.width, dataPicker.hitbox.height);
        unit = Picker.create(dataPicker.cost, dataPicker.health, dataPicker.armor, hitboxPicker, team, PickerBrain, dataPicker.viewDistance);
        console.log(unit);
        break;
      case AgentType.unit.soldier:
        var Soldier = Unit.soldier;
        var dataSoldier = dataUnit.soldier;
        var SoldierBrain = UnitBrain.soldier.create();
        var hitboxSoldier = Hitbox.create(0, 0, dataSoldier.hitbox.width, dataSoldier.hitbox.height);
        unit = Soldier.create(dataSoldier.cost, dataSoldier.health, dataSoldier.armor, hitboxSoldier, team, SoldierBrain, dataSoldier.viewDistance);
        console.log(Soldier);
        console.log(unit);
        break;
      default:
    }

    return unit;

  };

  this.createBuilding = function(type, team) {
    var dataBuilding = Data.building;
    var building;

    switch (type) {
      case AgentType.building.base:
        var Base = Building.base;
        var dataBase = dataBuilding.base;
        var BaseBrain = BuildingBrain.base.create();
        var hitboxBase = Hitbox.create(0, 0, dataBase.hitbox.width, dataBase.hitbox.height);
        building = Base.create(dataBase.armor, hitboxBase, team, BaseBrain);
        break;
      default:
    }

    return building;
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
        var hitboxPlant = Hitbox.create(0, 0, dataPlant.hitbox.width, dataPlant.hitbox.height);
        resource = Plant.create(hitboxPlant, team, PlantBrain);
        break;
      case AgentType.resource.mineral:
        var Mineral = Resource.mineral;
        var dataMineral = dataResource.mineral;
        var MineralBrain = ResourceBrain.mineral.create();
        var hitboxMineral = Hitbox.create(0, 0, dataMineral.hitbox.width, dataMineral.hitbox.height);
        resource = Mineral.create(hitboxMineral, team, MineralBrain);
        break;
      default:
    }

    return resource;
  };

  this.createProjectile = function(type, team) {

  };

}

module.exports = AgentFactory;
