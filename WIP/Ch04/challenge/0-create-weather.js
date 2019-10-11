const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("weather", (table) => {
		table.increments("id").primary();
		table.text("day");
		table.integer("high");
		table.integer("low");
	});
}).then(() => {
	console.log("Done!");
}).finally(() => {
	db.destroy();
});