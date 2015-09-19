var about = require('express').Router();

about.get('/', function(req, res) {

  if(req.user !== undefined) {
    res.render('partials/about', {
        title : 'Code Agent - About',
        isAboutPage : true,
        user: req.user
    });
  }
  else {
    res.render('partials/about', {
        title : 'Code Agent - About',
        isAboutPage : true
    });
  }
});



module.exports = about;
