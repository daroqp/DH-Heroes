const express = require('express');
const path = require('path');

const app = express();

//app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/index.html');
	res.sendFile(htmlPath);
});


app.get('/babbage', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/babbage.html');
	res.sendFile(htmlPath);
});


app.get('/berners-lee', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/berners-lee.html');
	res.sendFile(htmlPath);
});


app.get('/clarke', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/clarke.html');
	res.sendFile(htmlPath);
});


app.get('/hamilton', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/hamilton.html');
	res.sendFile(htmlPath);
});


app.get('/hopper', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/hopper.html');
	res.sendFile(htmlPath);
});


app.get('/lovelace', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/lovelace.html');
	res.sendFile(htmlPath);
});


app.get('/turing', (req, res) => {
	const htmlPath = path.resolve(__dirname, './views/turing.html');
	res.sendFile(htmlPath);
});




app.listen(3030, () => {
	console.log('Server runing on port 3030');
});
