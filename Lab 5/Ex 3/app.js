const events = require('events');
const eventEmitter = new events.EventEmitter();

const alarm = () =>{
    console.log("Alarm has been triggered!!");
}
const afterAlarm = () =>{
    console.log("call 911");
}

eventEmitter
.on('onalarm', alarm)
.on('afterAlarm', afterAlarm);

eventEmitter.emit('onalarm')
eventEmitter.emit('afterAlarm');