
var http = require("http");

var EventEmitter = require('events').EventEmitter,
	util = require('util');


MyServer = function() {
	function onRequest(request, response) {
		console.log("New request!");
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.write("<html><body><strong>Hello World!</strong></body></html>");
		response.end();
	}

	var self = this;
	var onNewConnection = function(stream) {
		console.log("Nouvelle connection");
		self.emit('newConnection', 'Youpi');
	};

	var server = http.createServer(onRequest).listen(8888);
	server.on("connection", this.onNewConnection);

	console.log("Server started");
}

util.inherits(MyServer, EventEmitter);




// MyServer.on('newConnection', function(arg) {
// 	console.log(arg);
// });

exports.start = MyServer;




