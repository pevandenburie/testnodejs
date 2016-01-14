// HTTP Server which receive the requestes and forward to the router

var http = require('http');
var url = require('url');

function start(route, handle) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		console.log("Path requested: "+pathname);
		route(handle, pathname, function(code, data) {
			response.writeHead(code, {"Content-Type": "text/plain"});
			response.write(data);
			response.end();	
		});
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server started");
}


exports.start = start;