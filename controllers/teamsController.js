var teams = require('express').Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

teams.get('/', function(req, res) {
  if(req.user !== undefined) {
    res.render('partials/teams', {
        title : 'Code Agent - Teams',
        isTeamsPage : true,
        user : req.user
    });
  }
  else {
    res.redirect('/');
  }

});

module.exports = teams;
