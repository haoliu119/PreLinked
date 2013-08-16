// var users = require('../controllers/users.js');
var site = require('../controllers/site.js');

module.exports = function(app) {
	app.get('/', site.index);
	// app.post('/user', users.create);
	// app.get('/user', users.list);
	// app.get('/user/:id', users.read);
	// app.put('/user/:id', users.update);
	// app.del('/user/:id', users.delete);
};