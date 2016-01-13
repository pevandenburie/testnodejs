var fs = require('fs');

require('http').createServer( function(req, res) {

	var rs = fs.createReadStream("testnode.js");
	/*rs.on('data', function(data) {
		res.write(data);
	});
	rs.on('end', function() {
		res.end();
	});*/
	rs.pipe(res);
}).listen(8888);

