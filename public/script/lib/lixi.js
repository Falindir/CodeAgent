/**
* @license
* lixi.js - v0.0.1
* Copyright (c) 2015-2016, Lopez Jimmy
*
* lixi.js is licensed under the MIT License.
* http://www.opensource.org/licenses/mit-license.php
*/

/**
* @author Lopez Jimmy https://github.com/Falindir
*/

/**
* need lili.js
* need pixi.js
**/

;(function() {

  var LIXI = LIXI || {};

  LIXI.VERSION = "v0.0.1";

  LIXI.AUTHOR = "Falindir";

  LIXI.sayHello = function () {
    console.log('Lixi.ls : ' + LIXI.VERSION + " - author : " + LIXI.AUTHOR);
  };

  LIXI.CURSOR = {
    default : 'default',
    pointer  : 'pointer'
  };

  LIXI.Compare = {};

  LIXI.Compare.zIndex = function (a,b) {
    if (a.zIndex < b.zIndex)
    return -1;
    if (a.zIndex > b.zIndex)
    return 1;

    return 0;
  };

  LIXI.Sprite = LILI.Class.extend({

    init : function(texture) {
      this.sprite               = new PIXI.Sprite(texture);
      this.sprite.position.x    = 0;
      this.sprite.position.y    = 0;
      this.sprite.anchor.x      = 0;
      this.sprite.anchor.y      = 0;
      this.sprite.alpha         = 1;
      this.sprite.scale.x       = 1;
      this.sprite.scale.y       = 1;
      this.sprite.rotation      = 0;
      this.sprite.visible       = true;
      this.sprite.interactive   = false;
      this.sprite.buttonMode    = false;
      this.sprite.defaultCursor = LIXI.CURSOR.default;
      this.sprite.zIndex        = 0;
    },

    setPosX : function (posX) {
      this.sprite.position.x = posX;
    },

    setPosY : function (posY) {
      this.sprite.position.y = posY;
    },

    setPos : function(posX, posY) {
      this.sprite.setPosX(posX);
      this.sprite.setPosY(posY);
    },

    multiplyPosFactor : function (factor) {
      this.sprite.position.x *= factor;
      this.sprite.position.y *= factor;
    },

    setAnchX : function (anchX) {
      this.sprite.anchor.x = anchX;
    },

    setAnchY : function (anchY) {
      this.sprite.anchor.y = anchY;
    },

    setAnchs : function (val) {
      this.setAnchX(val);
      this.setAnchY(val);
    },

    setAlpha : function (alpha) {
      this.sprite.alpha = alpha;
    },

    setScaleX : function (scaleX) {
      this.sprite.scale.x = scaleX;
    },

    setScaleY : function (scaleY) {
      this.sprite.scale.y = scaleY;
    },

    setScales : function (val) {
      this.setScaleX(val);
      this.setScaleY(val);
    },

    multiplyScalesFactor : function (factor) {
      this.sprite.scale.x *= factor;
      this.sprite.scale.y *= factor;
    },

    setVisible : function (visible) {
      this.sprite.visible = visible;
    },

    setRotation : function (rotation) {
      this.sprite.rotation = rotation;
    },

    incrementRotation : function (rotation) {
      this.sprite.rotation += rotation;
    },

    setInteractive : function (interact) {
      this.sprite.interactive = interact;
    },

    setButtonMode : function (butMode) {
      this.sprite.buttonMode = butMode;
    },

    setCursor : function (cursor) {
      this.sprite.defaultCursor = cursor;
    },

    getX : function () {
      return this.sprite.position.x;
    },

    getY : function () {
      return this.sprite.position.y;
    },

    setTexture : function (texture) {
      this.sprite.setTexture(texture);
    }

  });

  LIXI.SpriteSheet = LILI.Class.extend({

    init : function(sheet, height, width, blockH, blockW) {
      this.sheet       = PIXI.Texture.fromImage(sheet);
      this.height      = height;
      this.width       = width;
      this.blockHeight = blockH;
      this.blockWidth  = blockW;
      this.blocks      = new LILI.Collections.List();
      this.blocksN     = new LILI.Collections.Map();
    },

    cut : function () {
      for (var i = 0; i < this.height / this.blockHeight; i++) {
        for (var j = 0; j < this.width / this.blockWidth; j++) {
          var blockPosition = new PIXI.Rectangle(j * this.blockWidth, i * this.blockHeight, this.blockWidth, this.blockHeight);
          var blockTexture = new PIXI.Texture(this.sheet.baseTexture, blockPosition);
          this.blocks.add(blockTexture);
        }
      }
    },

    addName : function (name, index) {
      this.blocksN.insert(name, this.blocks.get(index));
    },

    getBlock : function (name) {
      return this.blocksN.get(name);
    }

  });

  LIXI.Button = LIXI.Sprite.extend({

    init : function(name, texture) {
      this._super(texture);
      this.name   = name;
      this.type   = -1;
      this.isDown = false;
      this.setInteractive(true);
      this.setButtonMode(true);
      this.setCursor(LIXI.CURSOR.pointer);
    }
  });

  LIXI.Camera = LILI.Class.extend({

    init : function(stage) {
      this.container = new PIXI.Container();
      stage.addChild(this.container);
      this.container.position.x = 0;
      this.container.position.y = 0;
    },

    addSprite : function (sprite) {
      this.container.addChild(sprite);
    },

    removeSprite : function(sprite) {
      this.container.removeChild(sprite);
    },

    initPosition : function () {
      this.setPos(0, 0);
    },

    setPosX : function (posX) {
      this.container.position.x = posX;
    },

    setPosY : function (posY) {
      this.container.position.y = posY;
    },

    setPos : function (posX, posY) {
      this.setPosX(posX);
      this.setPosY(posY);
    },

    samePosX : function (posX) {
      return this.container.position.x == posX;
    },

    samePosY : function (posY) {
      return this.container.position.y == posY;
    },

    samePos : function (posX, posY) {
      return this.samePosX(posX) && this.samePosY(posY);
    },

    moveX : function (dx) {
      this.container.position.x += dx;
    },

    moveY : function (dy) {
      this.container.position.y += dy;
    }

  });

  LIXI.Background = LILI.Class.extend({

    init : function(stage, texture, width, height, scale) {
      this.container = new PIXI.Container();
      this.tilingSprite = new PIXI.extras.TilingSprite(texture, width, height);
      this.setScale(scale);
      stage.addChild(this.container);
      this.container.addChild(this.tilingSprite);
    },

    setScale : function (scale) {
      this.tilingSprite.scale.x = scale;
      this.tilingSprite.scale.y = scale;
    }

  });

  LIXI.Stream = LILI.Class.extend({

    init : function(cnt, color, backgroundTexture) {
      this.nameContainer = cnt;
      this.container     = $(cnt)[0];
      this.renderer      = new PIXI.autoDetectRenderer(this.container.offsetWidth,this.container.offsetHeight,{backgroundColor : color});
      this.stage         = new PIXI.Container();

      if(!LILI.isUndefined(backgroundTexture))
        this.backGround    = new LIXI.Background(this.stage, backgroundTexture, 2000, 2000, 0.3);

      this.camera        = new LIXI.Camera(this.stage);
      this.hud           = new LIXI.Camera(this.stage);

      this.coordCenterX  = 0;
      this.coordCenterY  = 0;
      this.zoom          = 1;
      this.minZoom       = 0;
      this.maxZoom       = 100000;
      this.prevX         = 0;
      this.prevY         = 0;
      this.isDragging    = false;
      this.activeZoom    = true;
      this.activeMove    = true;
    },

    initStream : function() {
      this.stage.interactive = true;
      this.renderer.view.style.display = "block";
      this.container.appendChild(this.renderer.view);
      this.camera.initPosition();
    },

    resizeStream : function () {
      this.renderer.resize(this.container.offsetWidth-1, this.container.offsetHeight-1);
      this.coordCenterX = this.container.offsetWidth-1 / 2;
      this.coordCenterY = this.container.offsetHeight-1 / 2;
      this.backGround.tilingSprite.height = this.container.offsetHeight / 0.3;
      this.backGround.tilingSprite.width = this.container.offsetWidth / 0.3;
    },

    renderStream : function () {
      this.renderer.render(this.stage);
    },

    cameraMove : function () {

      var self = this;

      this.stage.mousedown = function (moveData) {
        var pos = moveData.data.global;
        this.prevX = pos.x;
        this.prevY = pos.y;
        this.isDragging = true;
      };

      this.stage.mouseup = function (moveDate) {
        this.isDragging = false;
      };

      this.stage.mouseover = function (moveDate) {

      };

      this.stage.mousemove = function (moveData) {

        if(this.activeMove) {
          if (!this.isDragging) {
            self.moveWhenNotDragging(moveData);
            return;
          }

          var pos = moveData.data.global;

          if(pos.x > 0 && pos.y > 0 && pos.x < self.container.offsetWidth-1 && pos.y < self.container.offsetHeight-1) {
            var dx = pos.x - this.prevX;
            var dy = pos.y - this.prevY;

            //self.camera.position.x += dx;
            //self.camera.position.y += dy;
            self.camera.moveX(dx);
            self.camera.moveY(dy);

            this.prevX = pos.x;
            this.prevY = pos.y;
          }
          else {
            this.isDragging = false;
          }
        }
        else {
          self.moveWhenNotDragging(moveData);
        }
      };
    },

    moveWhenNotDragging : function (moveData) {
      //abstract function
    }

  });

  LIXI.sayHello();

  window.LIXI = LIXI;
}) ();
