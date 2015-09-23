var duel = require('express').Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var User = mongoose.model('User');

duel.get('/', function(req, res) {
  if(req.user !== undefined) {
    Team.find({}, function(err, t) {
      Team.find({creator: req.user._id}, function(err, userT) {
        res.render('partials/duel', {
            title : 'Code Agent - Duel',
            isDuelPage : true,
            user : req.user,
            teams : t,
            userTeam : userT
        });
      });
    });
  }
  else {
    res.redirect('/');
  }

});

duel.get('/team', function(req, res) {
  if(req.query.id !== undefined) {
    Team.find({_id: req.query.id}, function(err, t) {
      if(t !== undefined) {
          res.render('partials/duelTeam', {
              title : 'Code Agent - Duel',
              isDuelTeamPage : true,
              user : req.user,
              team : t[0]
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

duel.respond = function(socket){
  console.log('a user connected');

  socket.on('duel', function(msg){
    if(msg === 'start') {
      console.log("Start Game");
    }
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
};

module.exports = duel;
