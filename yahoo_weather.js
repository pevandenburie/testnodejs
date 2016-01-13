var http = require('http');

var jsondata = '';

http.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D615702%20and%20u%3D'c'&format=json&diagnostics=true&callback=", function(res) {
	if (res.statusCode === 200) {
		res.on('data', function(chunck) {
			jsondata += chunck;
		});

		res.on('end', function() {
			var j = JSON.parse(jsondata);
			var title = j.query.results.channel.item.title;
			var temp = parseInt(j.query.results.channel.item.condition.temp);

			console.log(title);
			console.log("--------------------");
			console.log("temp: %d", temp);
			j.query.results.channel.item.forecast.forEach(function(forecast) {
				console.log("%s: temp high: %s low: %s", forecast.day, forecast.low, forecast.high);
			});
		});

		res.on('error', function(error) {
			console.log('there was an error: ' + error.message);
		})
	}
});


