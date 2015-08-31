var register = require('express').Router();

register.get('/', function(req, res) {

    res.render('partials/register', {
        title : 'Code Agent - Register',
    });

});



module.exports = register;
