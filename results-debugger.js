exports.debug = function(results) {
	results.forEach(function(result) {
		console.log('--' + result.label + '--');
		console.log(result.data.map(function(item) {
			return item.time + ' ' + item.length;
		}).join('\n'));
		console.log('');
	});
};