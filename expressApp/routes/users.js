var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //req.app => we can access the app if needed

  var User = req.app.get('User');

  User.find({}, function(err, users) {
  	if (err) {
  		res.status(err.status || 500);
  		res.render('error', {
  			message: err.message,
  			error: err,
  		});
  		console.log("Error: " + err);
  	}
  	res.render('users', {users: users});
  });
});


// Retrieve all the users with a specific name: 'http://localhost:3000/users/Trump'
router.get('/:name', function(req, res) {
  var User = req.app.get('User');
  User.find({'name': req.params.name}, function(err, documents) {
  	if (err) {
  		res.status(err.status || 500);
  		res.render('error', {
  			message: err.message,
  			error: err,
  		});
  		console.log("Error: " + err);
  	}
  	res.render('users', {users: documents});
  });
});

module.exports = router;
