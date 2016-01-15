var assert = require('assert');
var userServiceConstructor = require('../lib/services/user');

var UserModel = require('../lib/models/userModel');

var operations = userServiceConstructor(UserModel.User);

describe('Test userService', function() {
	it('getAll must return plenty of users', function(done) {
		operations.getAll(function(users) {
			assert.equal(26, users.length);	// we know in advance the content of the DB
			done();
		});
	});

	it('get must return one with correct name', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		operations.get(nameToTest, function(user) {
			assert.equal(typeof user, 'object');
			assert.equal(user.name, nameToTest);
			assert.equal(user.firstname, firstnameToTest);
			done();
		})
	});

	it('remove must delete the correct user', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		operations.remove(nameToTest, function(users) {
			assert.equal(25, users.length);	// we know in advance the content of the DB
			done();
		});
	});

	it('add must add a user', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		var ageToTest = 65;
		//var u = new UserModel.User(nameToTest, firstnameToTest, ageToTest);
		var u = {
			name: nameToTest,
			firstname: firstnameToTest,
			age: ageToTest
		};
		operations.add(u, function(users) {
			assert.equal(26, users.length);	// we know in advance the content of the DB
			done();
		});
	})
});







