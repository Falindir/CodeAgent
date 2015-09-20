var register = require('express').Router();
var util     = require('../config/util.js');
var roleUser = require('../tools/role.js');
var rankUser = require('../tools/rank.js');
var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');

register.get('/', function(req, res) {
  if(req.user === undefined) {
    res.render('partials/register', {
        title : 'Code Agent - Register',
    });
  }else {
    res.redirect('/');
  }

});

register.post('/', function(req, res, next) {

    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;

    User.findOne({email: email} ,function (err, user) {
      if (user !== null) {
        res.redirect('/register');
      } else {
        //if(password === confirmPassword) {
            var u = new User({ name: name, email: email, lastConnection: new Date(),
              password: util.encrypt(password), premium: false, inscriptionDate: new Date(),
              role: roleUser.user, elo: 1000, rank: rankUser.empty, teams: [], created: []});
            u.save(function (err) {
                if (err) {
                    next(err);
                } else {
                    req.login(u, function(err) {
                        if (err) { return next(err); }
                        return res.redirect('/');
                    });
                }
            });
        // } else {
        //     req.flash('registerStatus', false);
        //     req.flash('error', 'The confirmation password does not match the password');
        //     res.redirect('/register');
        // }
    }
  });
});

module.exports = register;
