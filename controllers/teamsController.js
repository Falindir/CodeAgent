var teams = require('express').Router();
var mongoose = require('mongoose');
var rankUser = require('../tools/rank.js');
var User = mongoose.model('User');
var Team = mongoose.model('Team');

teams.get('/', function(req, res) {
  if(req.user !== undefined) {

    var teams;

    Team.find({creator: req.user._id}, function(err, t) {
      res.render('partials/teams', {
          title : 'Code Agent - Teams',
          isTeamsPage : true,
          user : req.user,
          teamsUser : t
      });
    });
  }
  else {
    res.redirect('/');
  }

});

teams.post('/new', function(req, res) {
  if(req.user !== undefined) {

    var name = req.body.name;
    var user = req.user;
    var description = req.body.description;

    var team = new Team(
    { name: name, description: description, elo: 1000,
      rank: rankUser.empty, creationDate: new Date(),
      creator: user._id, members: [user._id]
    });

    team.save(function (err) {
        if (err) {
            next(err);
        }
    });

    res.redirect('/');
  }
  else {
    res.redirect('/');
  }

});

module.exports = teams;
