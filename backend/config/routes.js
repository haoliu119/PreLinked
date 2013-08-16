module.exports = function(app){

	//home route
	var home = require('../controllers/home');
	app.get('/', home.index);

};
