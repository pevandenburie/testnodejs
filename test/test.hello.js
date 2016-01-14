
var hello = require('./../hello');

describe('Saying hello', function() {
	it ('should wait before saying hello asynchronously', function(done) {
		hello(function() {
			done();
		});
	});
});
