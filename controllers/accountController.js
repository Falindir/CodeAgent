var account = require('express').Router();

account.get('/', function(req, res) {

    res.render('partials/about', {
        title : 'Code Agent',
        isUserHomePage : true
    });

});


module.exports = account;
