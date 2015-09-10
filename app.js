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

var home = require('./controllers/index').home;
var login = require('./controllers/index').login;
var register = require('./controllers/index').register;
var about = require('./controllers/index').about;
var contact = require('./controllers/index').contact;
var account = require('./controllers/index').account;

app.use('/', home);
app.use('/index', home);
app.use('/login', login);
app.use('/register', register);
app.use('/about', about);
app.use('/contact', contact);
app.use('/account', account);
app.use('*', home);

// TEST

// var Game = require('./engine/game/game.js');
//
// var game1 = Game.create();
// var game2 = Game.create();
//
// game1.start();
//
// game2.start();
// game2.setInterval(1000);

var LILI = require('./lib/lili/lili.js');
var R = require('./engine/geometric/form.js');
var H = require('./engine/geometric/hitbox.js');

var h1 = H.create(0, 0, 40, 20);
console.log(h1.toString());
h1.rotation(90);
console.log(h1.toString());


var h2 = H.create(40, 0, 40, 20);
console.log(h2.toString());

console.log(h1.intersect(h2));

h2.translation(0, 25);
console.log(h2.toString());


server.listen(3000);
