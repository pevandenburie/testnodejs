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
