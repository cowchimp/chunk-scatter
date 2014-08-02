exports.format = function(results) {
	var scatter = [ getTitle(results) ];
	var maxTime = 0;
	var maxLength = 0;

	for(var i=0; i<results.length; i++) {
		var result = results[i].data;
		for(var j=0; j<result.length; j++) {
			var point = [ result[j].time ];
			if(result[j].time > maxTime) { maxTime = result[j].time; }
			if(result[j].length > maxLength) { maxLength = result[j].length; }
			for(var k=0; k<results.length; k++) {
				point.push(k == i ? result[j].length : null);
			}
			scatter.push(point);
		}
	}
	return {
		scatter: scatter,
		maxTime: maxTime,
		maxLength: maxLength
	};
};

function getTitle(results) {
	var title = [ 'Time' ];
	results.forEach(function(result) {
		title.push(result.label);
	});
	return title;
}