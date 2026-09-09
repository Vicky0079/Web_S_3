const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('Please trun off the motor!');
    setTimeout(() => {
        console.log('please trun off the motor! Its a gentel reminder');
    }, 3000);
    });

console.log("the script is running")
console.log("the script is still running")

myEmitter.emit('WaterFull');


