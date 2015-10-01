var Texture = {};

Texture.HUD = {};

Texture.HUD.button = {
  playButton : PIXI.Texture.fromImage("../../../assets/run.png")
};

Texture.MAP = {
  default : PIXI.Texture.fromImage("../../../assets/map.png")
};

var basesSS = new LIXI.SpriteSheet('../../../assets/bases.png', 250, 1250, 250, 250);
basesSS.cut();

Texture.Agents = {

  blue : basesSS.get(0),
  red : baseSS.get(1),
  pink : baseSS.get(2),
  orange : baseSS.get(3),
  white : baseSS.get(4)

};
