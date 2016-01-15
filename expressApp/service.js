var userServiceConstructor = require('./lib/services/user');
//var UserModel = require('./lib/models/userModel');

var operations = userServiceConstructor();

operations.getAll(function(users) {
	console.log(users);
});