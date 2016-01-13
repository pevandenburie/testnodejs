
//var process = require('process'); // inherited from the parent

process.on('message', function(data) {
	console.log(data);
});


exports.more = process;

