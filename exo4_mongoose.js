var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cisco');
var db = mongoose.connection;
console.log("connected");

var personneSchema = new mongoose.Schema({
	nom: {
		type: String,
		required: true,
	},
	prenom: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	matricule: {
		type: Number,
		required: true,
		unique: true
	},
});

// enregistre le schéma
var Personne = mongoose.model('Personne', personneSchema);



function addEmploye(nom, prenom, age, matricule, callback) {
	var p1 = new Personne({nom: nom, prenom: prenom, age: age, matricule: matricule});
	p1.save(function(err, res) {
		if (err) {
			console.log("Error: " + err);
		}
		else {
			console.log(res);
		}

		if (typeof callback === 'function') {
			callback(err, res);
		}
	});
}


addEmploye("Smith", "Paul", 30, 1234);
addEmploye("Simon", "Pierre", 35, 5678);
addEmploye("Trump", "Donald", 65, 5678, function() {
	mongoose.disconnect();
	console.log("disconnected");
});


