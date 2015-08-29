var controller = require('express').Router();

controller.get('/', function(req, res) {

    res.render('partials/index', {
        title: 'Code Agent'
    });

});


module.exports = controller;
