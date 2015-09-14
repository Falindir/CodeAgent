var Class = require('uberproto');
var LILI = require('../../lib/lili/lili.js');

var DataCenter = Class.extend({

  init : function() {

    this.data = LILI.Collections.Map.create();
  },

  addData : function(key, value) {
    this.data.insert(key, value);
  },

  getData : function() {
    var data;



    return data;
  },

  toString : function() {
    return "";
  }


});
