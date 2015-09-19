var mongoose = require('mongoose');
var util = require('../config/util.js');

var TeamSchema = new mongoose.Schema({
    name: String,
    description: String,
    elo: Number,
    rank: String,
    creationDate: { type: Date, default: Date.now },
    creator: { type: Number, ref: 'User' },
    members: [{ type: Number, ref: 'User' }]

});

TeamSchema.methods = {



};

mongoose.model('Team', TeamSchema);
