const express = require('express');
const app = express();

app.put('/message/:ID', function(req, res) {
	const ID = req.params.ID;

	const hashedStr = require('crypto').createHash('sha1').
		update(new Date().toDateString().toString() + ID).digest('hex');

	res.send(hashedStr);
});

app.listen(process.argv[2]);
