const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function (err, data) {
		if (err) throw err;
		res.json(JSON.parse(data.toString()));
	});

});

app.listen(process.argv[2]);
