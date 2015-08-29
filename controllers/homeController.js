var home = require('express').Router();

home.get('/', function(req, res) {

    res.render('partials/index', {
        title: 'Code Agent'
    });

});

home.get('/index', function(req, res) {

    res.redirect('/');

});

home.get('*', function(req, res) {

    res.redirect('/');

});

module.exports = home;
