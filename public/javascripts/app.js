angular.module('chunkScatter', [], function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data):/);
});

google.load('visualization', '1.0', {'packages':['corechart']});

google.setOnLoadCallback(function() {
	angular.bootstrap(document, ['chunkScatter']);
});