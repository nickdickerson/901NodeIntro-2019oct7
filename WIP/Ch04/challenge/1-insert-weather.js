const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	const weather = require("./weather.json");
	return db("weather").insert(weather);
}).then(() => {
	console.log("Done!");
}).catch((err)=>{
	console.error(err);
}).finally(() => {
	db.destroy();
});
