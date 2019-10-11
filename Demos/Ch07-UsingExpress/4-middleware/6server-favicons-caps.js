const express = require("express");
const favicon = require('serve-favicon');
const path = require('path');
const lowercasePaths = require("express-lowercase-paths")
const config = {port: 3746} ;
//const bodyParser = require('body-parser');


let app = express();

app.use(express.json());
//app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((req, res, next)=> {
	const now = new Date().toString();
	console.log(`${now}: ${req.method} ${req.url}`);
	next();

})

app.use(lowercasePaths());

app.get("/", (req, res) => {
	res.send(`
		Hello. Review the readme and the code to see examples of middleware
	`);
});

app.get("/capitals", (req, res) => {
	res.send(`
		Check the above URL
	`);
});

app.post("/submit", (req, res) => {
	//console.log(req);
	res.json(req.body);
});

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});

