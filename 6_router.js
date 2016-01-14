// the router

function route(handle, pathname) {

	console.log("Handle route for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	}
	else {
		console.log("Unable to handle " + pathname);
	}
}


exports.route = route;