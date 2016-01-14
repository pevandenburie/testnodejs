var express = require('express');
var router = express.Router();

var users = {
  	'users': [
  	{	'name': 'Smith',
  		'firstname': 'Paul',
  	},
  	{	'name': 'Redford',
  		'firstname': 'Robert',
  	},
  	{	'name': 'Trump',
  		'firstname': 'Donald',
  	}
  	]
  };

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  
  res.render('users', users);
});

module.exports = router;
