var duel = require('express').Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

duel.get('/', function(req, res) {
  if(req.user !== undefined) {
    res.render('partials/duel', {
        title : 'Code Agent - Duel',
        isDuelPage : true,
        user : req.user
    });
  }
  else {
    res.redirect('/');
  }

});

module.exports = duel;
