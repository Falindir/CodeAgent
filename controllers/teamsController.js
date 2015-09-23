var teams = require('express').Router();
var mongoose = require('mongoose');
var rankUser = require('../tools/rank.js');
var User = mongoose.model('User');
var Team = mongoose.model('Team');

teams.get('/', function(req, res) {
  if(req.user !== undefined) {
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

teams.get('/details', function(req, res) {
  if(req.query.id !== undefined) {
    Team.find({_id: req.query.id}, function(err, t) {
      if(t !== undefined) {
        User.findOne({_id: t[0].creator} ,function (err, c) {
          res.render('partials/teamsDetails', {
              title : 'Code Agent - Team',
              isTeamsDetailsPage : true,
              user : req.user,
              team : t[0],
              creator : c
          });
        });
      }
      else {
        res.redirect('/');
      }
    });
  }
  else {
    res.redirect('/');
  }

});

teams.get('/delete', function(req, res) {
  if(req.query.id !== undefined) {
    Team.findOne({_id: req.query.id}, function(err, t) {
      if(t !== undefined) {
        t.remove(function (err) {
            if (err) {
                next(err);
            }
        });
      }

      res.redirect('/teams');
    });
  }
  else {
    res.redirect('/');
  }

});


module.exports = teams;
