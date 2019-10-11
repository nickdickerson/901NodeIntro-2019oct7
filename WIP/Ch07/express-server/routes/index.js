const express = require("express");
let router = express.Router();
const moment = require("moment");

let studentArray = [{
    nameFirst: "Devin",
    nameLast: "Durgan",
    email: "Devin.Durgan@gmail.com",
    hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
    nameFirst: "Cristal",
    nameLast: "Adams",
    email: "Cristal.Adams@live.com",
    hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
    nameFirst: "Nettie",
    nameLast: "McGlynn",
    email: "Nettie.McGlynn@gmail.com",
    hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];

// router.get("/", (req,res)=>{
//     res.send("Hello world! From the main page.");
// });

router.get("/", (req, res) => {
    res.render("index", {
        students: studentArray
    });
});

// router.get("/about", (req,res)=>{
//     res.send("Hello world! From the about page.");
// });

router.get("/about", (req, res) => {
	res.render("about");
});

// router.get("/class", (req,res)=>{
//     res.send("Hello world! From the class page.");
// });

router.get("/class", (req, res) => {
    res.render("class", {
        students: studentArray
    });
});

router.get("/weather", (req,res)=>{
    let ret = "";
    //ret += ("Hello world! From the weather page page.");

    ret += `<html><head><title>Weather Data</title></head><body>`;

    const weather = require("../weather.json");
    ret += `<h1>Weather Data</h1><br><table><tr><th>Day</th><th>High</th><th>Low</th></tr>`;
    weather.forEach(el => {
        ret += `<tr><td>${el.day}</td><td>${el.high}</td><td>${el.low}</td></tr>`;
    });
    ret += `</table></body></html>`;
    res.send(ret);

});

module.exports = router;