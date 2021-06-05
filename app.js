const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/index.html');
	res.sendFile(htmlPath);
});


app.listen(3030, () => {
	console.log('Server runing on port 3030');
});
