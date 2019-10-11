const filename = "./weather.json";

// read by include
{
    console.log("");
    console.log("READ BY INCLUDE");
    console.log(`Require file ${filename}`);
    const weather = require(filename);
    console.log(weather);
    weather.forEach(element => {
        console.log(element.day);
    });
}



// Asynchronous read
{
    console.log("");
    console.log("ASYNC READ");
    const fs = require("fs");
    fs.readFile(filename, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data);
        const weatherArr = JSON.parse(data);
        weatherArr.forEach(element => {
            console.log(element.day);
        });
    });
}

//sleep(5);


// json object
{
    console.log("");
    console.log("UTIL PROMISE READ");
    const util = require('util');
    const fs = require('fs');

    const readFile = util.promisify(fs.readFile);
    readFile(filename).then((data)=>{
        console.log(data.toString());
        const weatherArr = JSON.parse(data.toString());
        weatherArr.forEach(element => {
            console.log(element.day);
        });
    }). catch((err)=>{
        console.error(err);
    });
}




function sleep(sec){
    var wait = new Date(new Date().getTime()+sec*1000);
    while(wait>new Date()){}
}