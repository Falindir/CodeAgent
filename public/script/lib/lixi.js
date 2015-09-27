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

  LIXI.Editor = {};

  LIXI.sayHello();

  window.LIXI = LIXI;
}) ();
