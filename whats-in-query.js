var express = require('express');
var app = express();

app.get('/search', function(req, res) {
	var result = req.query;

	res.send(result);
});

app.listen(process.argv[2]);
