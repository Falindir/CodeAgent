var fs        = require('fs'),
    roleUser  = require('./tools/role.js'),
    rankUser  = require('./tools/rank.js'),
    mongoose  = require('mongoose');


mongoose.connect('mongodb://localhost/codeagent');

fs.readdirSync(__dirname + '/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var User = mongoose.model('User');

var u = new User({
  name: 'Foo',
  email: 'foo@bar.org',
  lastConnection: 'Sun Nov 02 2014 11:16:56 GMT+0100 (CET)',
  password: 'e0108a7eb91670308fff8179a4785453',
  premium: false,
  inscriptionDate: 'Sun Nov 02 2014 11:16:56 GMT+0100 (CET)',
  role: roleUser.user,
  rank: rankUser.empty
});

u.save(function(err) {
    if (err) { throw err; }
    console.log('User ajouté avec succès !');
});

var admin = new User({
  name: 'admin',
  email: 'admin@codeagent.com',
  lastConnection: 'Sun Nov 02 2014 11:16:56 GMT+0100 (CET)',
  password: '21232f297a57a5a743894a0e4a801fc3',
  premium: true,
  inscriptionDate: 'Sun Nov 02 2014 11:16:56 GMT+0100 (CET)',
  role: roleUser.admin,
  rank: rankUser.adamantite
});

admin.save(function(err) {
    if (err) { throw err; }
    console.log('Admin ajouté avec succès !');
});

mongoose.connection.close();
