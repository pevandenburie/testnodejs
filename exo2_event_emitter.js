// Event emitter

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var MyClock = function() {
	this.nbTicks = 0;

	var self = this;
	this.tick = function() {
		self.nbTicks++;
		self.emit('tick', self.nbTicks);
	}

	this.start = function() {
		setInterval(this.tick, 1000);
	}
};

util.inherits(MyClock, EventEmitter);

var clock = new MyClock();

clock.on('tick', function(nbTicks) {
	console.log("nbTicks: " + nbTicks);
});

clock.start();
