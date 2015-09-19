var register = require('express').Router();

register.get('/', function(req, res) {
  if(req.user === undefined) {
    res.render('partials/register', {
        title : 'Code Agent - Register',
    });
  }else {
    res.redirect('/');
  }

});



module.exports = register;
