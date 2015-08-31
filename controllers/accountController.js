var account = require('express').Router();

account.get('/', function(req, res) {
    if(req.user !== undefined) {
        res.render('partials/account', {
            title : 'Code Agent - Profil',
            user : req.user
        });
    }else {
        res.redirect('/');
    }

});





module.exports = account;
