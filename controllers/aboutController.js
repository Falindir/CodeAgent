var about = require('express').Router();

about.get('/', function(req, res) {

    res.render('partials/about', {
        title : 'Code Agent - About',
        isAboutPage : true
    });

});



module.exports = about;
