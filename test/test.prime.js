var assert = require('assert');
var nextPrime = require('./../prime.js').nextPrime;

describe('nextPrime', function() {
	it('nextPrime should return the nextPrime number', function() {
		assert.equal(11, nextPrime(7));
	});

	it('zero and one are not prime number', function() {
		assert.equal(2, nextPrime(0));
		assert.equal(2, nextPrime(1));
	})
});
