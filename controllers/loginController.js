var login = require('express').Router();

login.get('/', function(req, res) {

    res.render('partials/login', {
        title : 'Code Agent - Login',
        isLoginPage : true
    });

});



module.exports = login;
