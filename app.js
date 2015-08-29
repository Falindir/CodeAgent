var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'),
    fs = require('fs'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    layout = require('express-layout');

// app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
// app.set('views', path.join(__dirname, 'views'));
app.use(layout());

app.set('layouts', './views/layouts');
app.set('layout', 'default');

app.set('view engine', 'hbs');

var indexController = require('./controllers/index');

app.use('/', indexController);

app.use('*', indexController);

server.listen(8080);
