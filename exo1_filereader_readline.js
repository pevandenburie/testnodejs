var fs = require('fs');
var readline = require('readline');
var process = require('process');

var i=0;

var read = readline.createInterface({
	input: fs.createReadStream("./batch.txt", 
		{ flags: 'r', encoding: 'utf8'}),
	output: process.output,
});

read.on('line', function(l) {
	console.log(i +': '+ l.toUpperCase());
	i++;
});




// fs.readFile("./batch.txt", 'utf8', (err, data) => {
// 	if (err) throw err;

// 	// get lines
// 	var lines = data.split('\n');
// 	var i = 0;
// 	lines.forEach(function(l) {
// 		console.log(i +': '+ l.toUpperCase());
// 		i++;
// 	});

// 	console.log("\n\nListe des prénoms:\n\n");

// 	var i = 0;
// 	lines.forEach(function(l) {
// 		var endAt = l.indexOf(' ');
// 		if (endAt == -1) {
// 			console.log("<Pas de prénom>");
// 		}
// 		else {
// 			console.log( i+': '+ l.slice(0, endAt) );
// 		}
// 		i++;
// 	});	

// });

