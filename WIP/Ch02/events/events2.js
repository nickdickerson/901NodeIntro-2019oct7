const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('work', ()=>{
    console.log('*******');
});
emitter.once('work', ()=>{
    console.log('Clocking in...');
});
emitter.on('work', ()=>{
    console.log('Write Tests');
});
emitter.on('work', ()=>{
    console.log('Code');
});
emitter.on('work', ()=>{
    console.log('Refactor');
});
emitter.on('work', ()=>{
    console.log('Go to Meeting');
});


const onBreak = function (){
    console.log("Check Emails");
};
emitter.on("work", onBreak);
emitter.on("break", onBreak);

emitter.emit('work');
emitter.emit('work');
emitter.emit('break');