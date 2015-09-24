var crypto = require('crypto');
var fs     = require('fs');
var xml2js = require('xml2js');

module.exports = {

    encrypt: function (plainText) {
        return crypto.createHash('md5').update(plainText).digest('hex');
    },

    randomString: function (length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';

        var string = '';

        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            string += chars.substring(randomNumber, randomNumber + 1);
        }

        return string;
    },

    parseXmlFile: function(path) { // TODO bug
      var parser = new xml2js.Parser();
      var object;

      fs.readFile(path, function(err, data) {
          parser.parseString(data, function (err, result) {
              object = result;
          });
      });

      return object;
    },

    parseXmlString: function(data) {
      var object;
      var parser = new xml2js.Parser();

      parser.parseString(data, function (err, result) {
        object = result;
      });

      return object;
    },

    buildObjectToXml: function(object) {
      var xml;

      var builder = new xml2js.Builder();
      xml = builder.buildObject(object);

      return xml;
    }
};
