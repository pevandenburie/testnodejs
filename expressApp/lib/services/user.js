var UserModel = require('./../models/userModel');
var User = UserModel.User;


function getAll(cb) {
	User.find({}, function(err, users) {
		if (!err) {
			cb(users);
		}
	});
}

function get(name, cb) {
	User.find({name: name}, function(err, users) {
		if (!err) {
			cb(users[0]);
		}
	});	
}

function remove(name, cb) {
	User.findOneAndRemove({'name': name}, function(err, users) {
		if (!err) {
			getAll(cb);
		}
	});
}

function add(userObj, cb) {
	var u = new User(userObj);
	u.save(function(err) {
		if (!err) {
			getAll(cb);
		}
	});
}

var operations = {
	getAll: getAll,
	get: get,
	remove: remove,
	add: add
};


module.exports = operations;