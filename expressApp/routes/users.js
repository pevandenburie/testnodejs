var express = require('express');
var router = express.Router();
var userService = require('../lib/services/user');


/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
    // res.send('respond with a resource');
    //req.app => we can access the app if needed

    userService.getAll(function(users) {
      res.render('users', {users: users});
    });
  })
  .post(function(req, res) {
    var userObj = req.body;
    userService.add(userObj, function(users) {
      res.render('users', {users: users});
    });
  });


router.get('/new', function(req, res) {
  res.render('userForm', { user: {} });
});


// Retrieve all the users with a specific name: 'http://localhost:3000/users/Trump'
router.route('/:name')
  .get(function(req, res) {
    userService.get(req.params.name, function(user) {
      var users = [user];
      res.render('users', {users: users});
    });
  })
  .post(function(req, res) {
    var userObj = req.body;
    //var userMatricule = req.params.matricule;
    var userName = req.params.name;

    userService.update(userName,userObj, function(user) {
      var users = [user];
      res.render('users', {users: users});
    });
  });



router.get('/edit/:name', function(req, res) {
  userService.get(req.params.name, function(user) {
    res.render('userForm', { user: user });
  });
});

router.get('/delete/:name', function(req, res) {
  userService.remove(req.params.name, function(users) {
    res.render('users', { users: users});
  });
});


module.exports = router;
