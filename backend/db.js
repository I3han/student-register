const mongoose = require('mongoose');

const connectionLink = "-----------------mongoDB connection Link--------------";

mongoose.connect(connectionLink)
	.then(() => {
		console.log('mongodb connected');
	})
	 .catch(() => {
		console.log('connection failer');
	});
