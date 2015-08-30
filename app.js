var express   = require('express'),
    app       = express(),
    server    = require('http').createServer(app),
    io        = require('socket.io').listen(server),
    ent       = require('ent'),
    fs        = require('fs'),
    path      = require('path'),
    exphbs    = require('express-handlebars'),
    layout    = require('express-layout'),
    mongoose  = require('mongoose'),
    config    = require('config');

// configure database
require('./config/database')(app, mongoose);

// bootstrap data models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});    

app.use(layout());

app.set('layouts', './views/layouts');
app.set('layout', 'default');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

var home = require('./controllers/index').home;

app.use('/', home);

app.use('/index', home);

app.use('*', home);

server.listen(3000);
