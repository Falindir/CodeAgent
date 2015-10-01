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
    },

    createMap : function(data) {
      this.renderer.backgroundColor = 0x808080;

      var map = new LIXI.Sprite(Texture.MAP.default);
      var mapVH = data.height / 6350; // fix for map nn square
      map.setAnchs(0.5);
      map.setPosX(this.coordCenterX);
      map.setPosY(this.coordCenterY);
      map.setScales(0.09); // TODO fix bug

      this.camera.addSprite(map.sprite);


    }

});

var duelEditor = null;

function animateDuelEditorComplete() {
  requestAnimationFrame( animateDuelEditorComplete );
  duelEditor.resizeStream();
  duelEditor.renderStream();
  duelEditor.updateButtonRun();
}
