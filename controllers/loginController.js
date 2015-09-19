var login = require('express').Router();
var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');

login.get('/', function(req, res) {
  if(req.user === undefined) {
    res.render('partials/login', {
        title : 'Code Agent - Login',
        isLoginPage : true
    });
  }
  else {
    res.redirect('/');
  }
});

login.post('/',
    passport.authenticate('local',{ failureRedirect: '/login'}),
    function(req, res) {
        User.findOneAndUpdate({_id: req.user._id}, { lastConnection: new Date() }, {} ,function (err, user) {
            res.redirect('/');
        });
    });

module.exports = login;
