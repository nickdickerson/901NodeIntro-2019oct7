const express = require("express");
const app = express();
const config = require("./config.json");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/index"));

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port} ...`);
});