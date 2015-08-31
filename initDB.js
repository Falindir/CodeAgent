var fs        = require('fs'),
    mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/codeagent');

fs.readdirSync(__dirname + '/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var User = mongoose.model('User');

var u = new User({ name: 'Foo', email: 'foo@bar.org', lastConnection: 'Sun Nov 02 2014 11:16:56 GMT+0100 (CET)', password: 'e0108a7eb91670308fff8179a4785453' });

u.save(function(err) {
    if (err) { throw err; }
    console.log('User ajouté avec succès !');
    mongoose.connection.close();
});
