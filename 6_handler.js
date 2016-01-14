// path handler

var server = require('./6_server.js');
var router = require('./6_router.js');


var onStart = function() {
	console.log("start requested");
};

var onUpload = function() {
	console.log("upload requested");
}

var handle = {
	"/"	: onStart,
	"/start"	: onStart,
	"/upload"	: onUpload,
};

server.start(router.route, handle);
