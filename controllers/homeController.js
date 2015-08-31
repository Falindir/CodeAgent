var home = require('express').Router();

home.get('/', function(req, res) {

    res.render('partials/index', {
        title : 'Code Agent',
        isHomePage : true,
        user: req.user
    });

});

home.get('/index', function(req, res) {

    res.redirect('/');

});

home.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = home;
