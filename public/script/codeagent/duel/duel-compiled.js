var Texture = {};

Texture.HUD = {};

Texture.HUD.button = {};

Texture.HUD.button.playButton = PIXI.Texture.fromImage("../../../assets/run.png");




var DuelEditor = LIXI.Stream.extend({

    init : function(cnt, color, socket, model) {
        this._super(cnt, color, undefined);
        this.socket = socket;
        this.model = model;
    },

    initEditor : function() {
      var self = this;

      var runButton = new LIXI.Button("run", Texture.HUD.button.playButton);

      runButton.setAnchs(0.5);
      runButton.setScales(0.5);
      runButton.setPosX(this.coordCenterX);
      runButton.setPosY(this.coordCenterY);
      this.hud.addSprite(runButton.sprite);

      runButton.sprite.mousedown = function(data) {
        self.socket.emit('duel', {type : 'start', id1 : self.model.id1, id2 : self.model.id2});
      };

    }

});

var duelEditor = null;

function animateDuelEditorComplete() {
  requestAnimationFrame( animateDuelEditorComplete );
  duelEditor.resizeStream();
  duelEditor.renderStream();
}


