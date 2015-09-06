var mongoose = require('mongoose');
var util = require('../config/util.js');

var TeamSchema = new mongoose.Schema({
    name: String

});

TeamSchema.methods = {



};

mongoose.model('Team', TeamSchema);
