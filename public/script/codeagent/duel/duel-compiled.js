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

  bases : basesSS

};


var DuelEditor = LIXI.Stream.extend({

    init : function(cnt, color, socket, model) {
        this._super(cnt, color, undefined);
        this.socket = socket;
        this.model = model;

        this.runButton = null;
    },

    initEditor : function() {
      var self = this;

      this.runButton = new LIXI.Button("run", Texture.HUD.button.playButton);

      this.runButton.setAnchs(0.5);
      this.runButton.setScales(0.5);
      this.runButton.setPosX(this.coordCenterX);
      this.runButton.setPosY(this.coordCenterY);
      this.hud.addSprite(this.runButton.sprite);

      this.runButton.sprite.mousedown = function(data) {
        self.socket.emit('duel', {type : 'start', id1 : self.model.id1, id2 : self.model.id2});
        self.runButton.setInteractive(false);
        self.runButton.setVisible(false);
      };

    },

    updateButtonRun : function() {
      if(this.runButton !== null) {
        this.runButton.setPosX(this.coordCenterX);
        this.runButton.setPosY(this.coordCenterY);
      }
    },

    initGame : function(msg) {
      this.createMap(msg.map);
      var agentsTab = msg.agents;
      for (var i = 0; i < agentsTab.length; i++) {
        var agent = agentsTab[i];
        this.createAgent(agent);
      }

      this.camera.container.children.sort(LIXI.Compare.zIndex);
    },

    createMap : function(data) {
      this.renderer.backgroundColor = 0x808080;

      var map = new LIXI.Sprite(Texture.MAP.default);
      var mapVH = data.height / 6350; // fix for map nn square
      map.setAnchs(0.5);
      console.log((-1) * (data.width / 2));
      console.log((-1) * (data.height / 2));
      map.setPosX((-1) * (data.width / 2));
      map.setPosY((-1) * (data.height / 2));
      map.setScales(0.1); // TODO fix bug

      this.camera.addSprite(map.sprite);

      this.camera.setPosX(0);
      this.camera.setPosY(0);
    },

    createAgent : function(data) {
      var agent = new LIXI.Sprite(Texture.Agents.bases.blocks.get(0));
      agent.sprite.zIndex = 10;

      agent.setAnchs(0.5);
      console.log(data.x);
      console.log(data.y);
      agent.setPosX(data.x);
      agent.setPosY(data.y);
      agent.setScales(0.1);

      this.camera.addSprite(agent.sprite);
    }

});

var duelEditor = null;

function animateDuelEditorComplete() {
  requestAnimationFrame( animateDuelEditorComplete );
  duelEditor.resizeStream();
  duelEditor.renderStream();
  duelEditor.updateButtonRun();
}


