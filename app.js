const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
	res.send('Server on')
});


app.listen(3030, () => {
	console.log('Server runing on port 3030');
});
