const events = require('events');
const emitter = new events.EventEmitter();

const doWorkHandler1 = function() {
    console.log('Write Tests');
}

const doWorkHandler2 = function() {
    console.log('Code');
}

const doWorkHandler3 = function() {
    console.log('Refactor');
}

const doWorkHandler4 = function() {
    console.log('Check Emails');
}

emitter.on('work', ()=> {console.log('*******')});

emitter.once('work', ()=>{
    console.log('Clocking in...');
});

emitter.on('work', doWorkHandler1);
emitter.on('work', doWorkHandler2);
emitter.on('work', doWorkHandler3);
emitter.on('work', ()=> {
    console.log('Go to Meeting');
    
});

emitter.emit('work');
emitter.emit('work');



