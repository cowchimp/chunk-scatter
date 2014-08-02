var express = require('express');
var router = express.Router();
var async = require('async');
var chunkAnalyzer = require('../chunk-analyzer');
var graphFormatter = require('../graph-formatter');
var resultsDebugger = require('../results-debugger');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Chunk Scatter' });
});

router.post('/go', function(req, res) {
	var endpoints = req.body;
	async.map(endpoints, chunkAnalyzer.analyze, function(err, results) {
		if(err != null) {
			res.send(555, { error: err.message });
			return;
		}
		resultsDebugger.debug(results);
		res.send(graphFormatter.format(results));
	});

});

module.exports = router;