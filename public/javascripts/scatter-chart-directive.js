angular.module('chunkScatter').directive('scatterChart', function($parse) {
	return {
		link: function(scope, element, attrs) {
			scope.$watch(attrs.ngModel, function() {
				var data = $parse(attrs.ngModel)(scope);
				if(!data) {
					return;
				}

				var dataTable = google.visualization.arrayToDataTable(data.scatter);

				var options = {
					hAxis: {title: 'Time (ms)', minValue: 0, maxValue: data.maxTime},
					vAxis: {title: 'Length (char)', minValue: 0, maxValue: data.maxLength},
					legend: { position: 'top', alignment: 'center' },
					series: {}
				};

				var chart = new google.visualization.ScatterChart(element[0]);
				google.visualization.events.addListener(chart, 'ready', function () {
					$parse(attrs.imageUri).assign(scope, chart.getImageURI());
				});
				chart.draw(dataTable, options);
			});
		}
	}
});