const events = require('events');
const emitter = new events.EventEmitter();

let first=true;
emitter.on('work', function(){
    console.log('*******');
    if(first){
        first=false;
        console.log('Clocking in...');
    }
    console.log('Write Tests');
    console.log('Code');
    console.log('Refactor');
    console.log('Go to Meeting');
});

emitter.emit('work');
emitter.emit('work');