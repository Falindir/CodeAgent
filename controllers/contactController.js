var contact = require('express').Router();

contact.get('/', function(req, res) {
  if(req.user !== undefined) {
    res.render('partials/contact', {
        title : 'Code Agent - Contact',
        isContactPage : true,
        user: req.user
    });
  }
  else {
    res.render('partials/contact', {
        title : 'Code Agent - Contact',
        isContactPage : true
    });
  }
});



module.exports = contact;
