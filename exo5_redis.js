// test redis

// With redis-cli:
// 
// > keys *
// > keys personnel:*
// > hgetall personnel:1234
// > hget personnel:1234 nom
// > 


var redis = require('redis');

client = redis.createClient();

client.on('error', function(err) {
	console.log("Error: " + err);
});

function ajoutPersonne(nom, prenom, age, matricule) {
	// We choosed to have another table to store all the matricules (just for test!)
	client.sismember('employeeMatricules', matricule, function(err, result) {
		if (!err && result == 0) {
			var p = {
				nom: nom,
				prenom: prenom,
				age: age,
			};
			client.hmset("personnel:" + matricule, p, function(err, result) {
				if (!err) {
					client.sadd('employeeMatricules', matricule, redis.print);
				}
			});
		}
	});
}

ajoutPersonne("Smith", "Paul", 35, 1234);
ajoutPersonne("Trump", "Donald", 31, 5678);
ajoutPersonne("Simon", "Pierre", 31, 5678); // same matricule
ajoutPersonne("Obahama", "Barack", 31, 1212);


function getAllPersonnel() {
	client.keys('personnel:*', function(err, result) {
		if (!err) {
			var employees = [];
			var len = result.length;
			result.forEach(function(key) {
				var employeeMatricule = key.split(':')[1];

				client.hgetall(key, function(err, result) {
					result.matricule = employeeMatricule;
					employees.push(result);
					if (employees.length === len) {
						console.log(employees);
					}
				});
			});
			// console.log cannot be here because this is async, and we still did not get all the answers.
		}
	});
}

getAllPersonnel();