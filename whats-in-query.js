const express = require('express');
const app = express();

app.get('/search', function(req, res) {
	const result = req.query;

	res.send(result);
});

app.listen(process.argv[2]);
