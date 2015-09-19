var mongoose = require('mongoose');
var util = require('../config/util.js');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastConnection: { type: Date, default: Date.now },
    premium: Boolean,
    inscriptionDate: {type: Date, default: Date.now},
    role: String,
    elo: Number,
    rank: String,
    teams: [{ type: Number, ref: 'Team' }],
    created: [{ type: Number, ref: 'Team' }]
});

UserSchema.methods = {

    authenticate: function (plainText) {
        return util.encrypt(plainText) == this.password;
    }

};

mongoose.model('User', UserSchema);
