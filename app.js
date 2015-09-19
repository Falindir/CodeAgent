var express       = require('express'),
    session       = require('express-session'),
    app           = express(),
    server        = require('http').createServer(app),
    io            = require('socket.io').listen(server),
    ent           = require('ent'),
    fs            = require('fs'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    path          = require('path'),
    exphbs        = require('express-handlebars'),
    layout        = require('express-layout'),
    mongoose      = require('mongoose'),
    passport      = require('passport'),
    config        = require('config');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('S3CRE7'));
app.use(session({ secret: 'S3CRE7-S3SSI0N', saveUninitialized: true, resave: true } ));
app.use(express.static(path.join(__dirname, 'public')));
require('./config/passport')(app, passport);
app.use(passport.initialize());
app.use(passport.session());
var index = require('./controllers/index');
var home = index.home;
var login = index.login;
var register = index.register;
var about = index.about;
var contact = index.contact;
var account = index.account;
var duel = index.duel;

app.use('/', home);
app.use('/index', home);
app.use('/login', login);
app.use('/register', register);
app.use('/about', about);
app.use('/contact', contact);
app.use('/account', account);
app.use('/duel', duel);
app.use('*', home);

// TEST

// var Game = require('./engine/game/game.js');
// var AgentType = require('./engine/data/type.js');
// var game1 = Game.create(123456789, "ToTo", 123456789, "ToTo");
// game1.env.addAgent("MOTHER_IA", AgentType.agent.resource, AgentType.resource.plant, 10, 10);
//
// game1.env.addAgent("ToTo-2", AgentType.agent.unit, AgentType.unit.picker, 20, 70);
// game1.env.addAgent("ToTo-2", AgentType.agent.unit, AgentType.unit.soldier, 60, 50);
//
// console.log(game1.toString());
//
// game1.start();




server.listen(3000);
