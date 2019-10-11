const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("weather");
}).then((data) => {
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

