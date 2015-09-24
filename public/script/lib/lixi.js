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

;(function() {

  var LIXI = LIXI || {};

  LIXI.VERSION = "v0.0.1";

  LIXI.AUTHOR = "Falindir";

  LIXI.sayHello = function () {
    console.log('Lixi.ls : ' + LIXI.VERSION + " - author : " + LIXI.AUTHOR);
  };

  LIXI.sayHello();

  window.LIXI = LIXI;
}) ();
