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
var login = require('./controllers/index').login;
var register = require('./controllers/index').register;
var about = require('./controllers/index').about;
var contact = require('./controllers/index').contact;

app.use('/', home);
app.use('/index', home);
app.use('/login', login);
app.use('/register', register);
app.use('/about', about);
app.use('/contact', contact);
app.use('*', home);

server.listen(3000);
