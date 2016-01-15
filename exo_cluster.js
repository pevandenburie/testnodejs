var cluster = require('cluster');
var http = require('http');
var numCpu = require('os').cpus().length;

//var EventEmiter = require('process').EventEmiter;


if (cluster.isMaster) {
	console.log(`Cluster Master will create ${numCpu} workers`);


	cluster.on('exit', function(worker, code, signal) {
		console.log(`Worker ${worker.process.pid} exited with code ${code}`);
	});

	cluster.on('online', function(worker) {
		// listen for this new worker messages
		worker.on('message', function(data) {
			// var workerMsg = JSON.parse(data);
			var workerMsg = data;
			console.log('Master received a message: ' + workerMsg.message);

			setTimeout(function() {
				console.log("Killing worker "+workerMsg.workerId);
				if (cluster.workers[workerMsg.workerId]) {
					cluster.workers[workerMsg.workerId].kill();
				}
			}, 1000);
		});

		// send a msg to the new worker
		worker.process.send("Hello from master");
	});

	// create as much worker there are CPUs
	for (var i=0; i<numCpu; i++) {
		cluster.fork();
	}

}
else {

	cluster.worker.process.on('message', function(data) {
		console.log("Worker "+cluster.worker.id+" received message: "+data);
	})

	// create the http server
	http.createServer(function(req, res) {
		// notify the Master we received a solicitation
		//cluster.worker.process.send("Worker "+cluster.worker.id+" got an Http request");
		var workerMsg = {
			workerId: cluster.worker.id,
			message: "Worker "+cluster.worker.id+" got an Http request",
		};
		cluster.worker.send(workerMsg);

		res.writeHeader(200, {'Content-Type': 'text/plain'});
		res.write("Hello from worker "+cluster.worker.id+" with PID "+cluster.worker.process.pid);
		res.end();
	}).listen(8000);
}