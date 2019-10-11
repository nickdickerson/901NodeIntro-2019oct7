const fs = require('fs');

fs.readFile('input.txt', (err,data)=>{
    if(err){
        return console.error(err);
    }

    console.log(`Async read: ${data.toString()}`);
});