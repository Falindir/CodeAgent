var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server),
    ent     = require('ent'),
    fs      = require('fs'),
    path    = require('path'),
    exphbs  = require('express-handlebars'),
    layout  = require('express-layout');

app.use(layout());

app.set('layouts', './views/layouts');
app.set('layout', 'default');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

var indexController = require('./controllers/index');

app.use('/', indexController);

app.use('*', indexController);

server.listen(8080);
