const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
    console.log("Dropping Table.");
    return db.schema.dropTableIfExists("weather");
}).then(() => {
    console.log("Creating Table.");
	return db.schema.createTable("weather", (table) => {
		table.increments("id").primary();
		table.text("day");
		table.integer("high");
		table.integer("low");
	});
}).then(() => {
    console.log("Inserting Data.");
	const weather = require("./weather.json");
    return db("weather").insert(weather);
}).then(() => {
    console.log("Selecting Data.");
    return db("weather");
}).then((data) => {
    console.log("Analyzing Data.");

    console.log(data);

	if(data.length==0)
		return;

	let hottest = data[0];
	for(let x of data){
		if(x.high > hottest.high)
			hottest = x;
	}
	console.log(`Hottest Day: ${hottest.day} high temp ${hottest.high}`);

	let lowest = data[0];
	for(let x of data){
		if(x.low < lowest.low)
		lowest = x;
	}
    console.log(`Coldest Day: ${lowest.day} low temp ${lowest.low}`);
}).catch((err)=>{
    console.error(err);
}).finally(() => {
	db.destroy();
});