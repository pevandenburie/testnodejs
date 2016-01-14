// path handler

var server = require('./6_server.js');
var router = require('./6_router.js');


var onStart = function(cb) {
	console.log("start requested");
	cb("start requested")
};

var onUpload = function(cb) {
	console.log("upload requested");
	cb("upload requested");
}

var handle = {
	"/"	: onStart,
	"/start"	: onStart,
	"/upload"	: onUpload,
};

server.start(router.route, handle);
