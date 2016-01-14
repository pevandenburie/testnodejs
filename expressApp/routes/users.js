var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
console.log("connected");


// Create the User schema
var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
});

// Register the schema
var User = mongoose.model('User', userSchema);

function addUser(name, firstname, age, callback) {
	var u = new User({name: name, firstname: firstname, age: age});
	u.save(function(err, res) {
		if (err) { 
			console.log("Error: " + err);
		}
		else {
			console.log(res);
		}

		if (typeof callback === 'function') {
			callback(err, res);
		}
	});
}

// Do this only once to populate the DB
// addUser("Smith", "Paul", 30);
// addUser("Simon", "Pierre", 35);
// addUser("Redford", "Robert", 60);
// addUser("Trump", "Donald", 65);


// var users = {
//   	'users': [
//   	{	'name': 'Smith',
//   		'firstname': 'Paul',
//   	},
//   	{	'name': 'Redford',
//   		'firstname': 'Robert',
//   	},
//   	{	'name': 'Trump',
//   		'firstname': 'Donald',
//   	}
//   	]
//   };

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //req.app => we can access the app if needed

  User.find(function(err, users) {
  	if (err) {
  		console.log("Error: " + err);
  	}
  	console.log(users);
  	res.render('users', {users: users});
  });
});

module.exports = router;
