const EventEmitter = require('events');
const emitter = new EventEmitter();

const buf = Buffer.from([0x62,0x75,0x66,0x65,0x72]);


emitter.on('convert',()=>{
    for (const b of buf) {
        console.log(b);
      }
});

emitter.emit('convert');