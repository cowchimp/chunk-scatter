angular.module('chunkScatter').factory('chunkGraphDataFetcher', function($http) {
	function format(endpointsInput) {
		return endpointsInput.trim().split('\n').map(function(endpoint, ix) {
			endpoint = endpoint.trim().split(',');
			endpoint = {
				label: endpoint.length == 1 ? (ix+1).toString() : endpoint[0],
				url: endpoint.length == 1 ? endpoint[0] : endpoint[1]
			};
			if(endpoint.url.indexOf('http') != 0) {
				endpoint.url = 'http://' + endpoint.url;
			}
			return endpoint;
		});
	}

	return {
		fetch: function(endpointsInput) {
			return $http.post('/go', format(endpointsInput));
		}
	}
});