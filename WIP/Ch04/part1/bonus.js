const fs = require('fs');

fs.readFile('content.tst', (err,data)=>{
    if(err){
        return console.error(err);
    }

    console.log(`Async read: ${data}`);

    let count = 0;
    let str = data.toString();
    for(let i=0; i<str.length; i++){
        if(str[i] === '.')
            count++;
    }
    console.log(`Found ${count} sentences.`);
});