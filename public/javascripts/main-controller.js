angular.module('chunkScatter').controller('MainController', function($scope, chunkGraphDataFetcher) {
	var mc = this;

	this.endpointsInput = 'google,http://www.google.com\nfacebook,http://www.facebook.com';
	this.submitInProgress = false;
	this.errorMsg = '';
	this.chartData = null;
	this.chartImageUri = '';

	this.submit = function() {
		mc.submitInProgress = true;
		chunkGraphDataFetcher.fetch(mc.endpointsInput)
			.then(setChartData, setErrorMsg)
			.finally(function() { mc.submitInProgress = false; });
	};

	this.endpointsInputKeypress = function(e) {
		if(e.ctrlKey && e.keyCode == 10 && !mc.submitInProgress) {
			mc.submit();
		}
	};

	function setChartData(response) {
		mc.chartData = response.data;
		setErrorMsg('');
	}

	function setErrorMsg(arg) {
		if(typeof arg == 'string') {
			mc.errorMsg = arg;
			return;
		}

		if(typeof arg.status == 'number' && arg.status != 200) {
			if(arg.status == 555 && arg.data.error) {
				mc.errorMsg = arg.data.error;
			} else {
				mc.errorMsg = arg.statusText;
			}
		}
	}
});