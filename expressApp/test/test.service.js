var assert = require('assert');
var userService = require('../lib/services/user');

describe('Test userService', function() {
	it('getAll must return plenty of users', function(done) {
		userService.getAll(function(users) {
			assert.equal(26, users.length);	// we know in advance the content of the DB
			done();
		});
	});

	it('get must return one with correct name', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		userService.get(nameToTest, function(user) {
			assert.equal(typeof user, 'object');
			assert.equal(user.name, nameToTest);
			assert.equal(user.firstname, firstnameToTest);
			done();
		})
	});

	it('remove must delete the correct user', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		userService.remove(nameToTest, function(users) {
			assert.equal(25, users.length);	// we know in advance the content of the DB
			done();
		});
	});

	it('add must add a user', function(done) {
		var nameToTest = "Trump";
		var firstnameToTest = "Donald";
		var ageToTest = 65;
		var u = {
			name: nameToTest,
			firstname: firstnameToTest,
			age: ageToTest
		};
		userService.add(u, function(users) {
			assert.equal(26, users.length);	// we know in advance the content of the DB
			done();
		});
	})
});







