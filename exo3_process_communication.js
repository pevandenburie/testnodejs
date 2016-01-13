//exo3 process communication

var fork = require('child_process').fork;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var child = fork('./more');

var json = {
	user: "Paul",
	societe: "Cisco"
}

var JsonEmitter = function() {

	setInterval(function() {
		if (child) {
			child.send(json);
		}
	}, 1000);
};

util.inherits(JsonEmitter, EventEmitter);

var emitter = new JsonEmitter();

