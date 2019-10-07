var events= require('events')
var eventEmitter=events.EventEmitter();

eventEmitter.emit('event1');
eventEmitter.on('event1',display);

function display(){
    console.log("Hello Guys...........");
    
}