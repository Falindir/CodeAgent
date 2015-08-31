var contact = require('express').Router();

contact.get('/', function(req, res) {

    res.render('partials/contact', {
        title : 'Code Agent - Contact',
        isContactPage : true
    });

});



module.exports = contact;
