const events = require('events');
const emitter = new events.EventEmitter();
let count = 0;

setInterval(()=>{
    let num = Math.floor(Math.random()*21);
    //console.log(num);
    process.stdout.write(`${num}...`);
    if(num == 11){
        emitter.emit('sighting');
    }
}, 1000);

emitter.on('sighting', ()=>{
    console.log("sighting");
    count++;
});

process.on('SIGINT', ()=>{
    console.log("");
    console.log(`Event sighting fired ${count} times`);
    process.exit(0);
});

process.on('exit', ()=>{
    console.log("");
    console.log(`EXIT: Event sighting fired ${count} times`);
});

process.on('abort', ()=>{
    console.log("");
    console.log(`ABORT: Event sighting fired ${count} times`);
});

