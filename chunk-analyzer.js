var request = require('request');

exports.analyze = function(endpoint, callback) {
	var startDate = new Date().getTime();
	var data = [ ];

	var options = {
		url: endpoint.url,
		encoding: 'utf8',
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0'
		}
	};

	request.get(options).on('error', callback).on('response', function(response) {
		data.push({ time: new Date().getTime() - startDate, length: 0});

		response.on('data', function(chunk) {
			var time = new Date().getTime() - startDate;
			var length = data[data.length - 1].length + chunk.length;
			data.push({ time: time, length: length});
		});

		response.on('end', function() {
			callback(null, {
				label: endpoint.label,
				data: data
			});
		});
	});
};