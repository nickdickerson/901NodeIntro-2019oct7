const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
    return db.schema.dropTableIfExists("customer");
}).then(() => {
	return db.schema.createTable("customer", (table) => {
		table.increments("id").primary();
		table.text("firstname");
        table.text("lastname");
        table.text("email");
	});
}).then(() => {
   console.log("Done!");
    return db("customer").insert([
        {firstname: "John", lastname: "Doe", email: "johndoe@example.com"},
        {firstname: "John", lastname: "Smith", email: "johnsmith@example.com"},
        {firstname: "Bell", lastname: "Biv", email: "billbiv@example.com"},
        {firstname: "Babe", lastname: "Ruth", email: "baberuth@example.com"},
    ]);
}).then(() => {
    return db("customer");
}).then((data) => {
    console.log(data);
// }).then(() => {
//     return db.schema.dropTableIfExists("customer");
}).catch((err) => {
    console.error(err);
}).finally(() => {
	db.destroy();
});

