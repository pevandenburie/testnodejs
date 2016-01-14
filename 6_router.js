// the router

function route(handle, pathname, cb) {

	console.log("Handle route for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](cb);
	}
	else {
		console.log("Unable to handle " + pathname);
		cb(404, "404 NOT FOUND");
	}
}


exports.route = route;