//import statement
const events = require('events');
//event emitter constructor
const eventEmitter = new events.EventEmitter();

playGame = (num) => {
    eventEmitter.emit('onping',num,1);
}

eventEmitter
.on('onping', (num,i) => {
    console.log(`Round.. ${i}`);
    console.log(`ping..`);
    setTimeout(() =>{
        eventEmitter.emit('onpong',num,i+1)
    }, 1000);
});

eventEmitter
.on('onpong', (num,i) => {
    console.log(`pong..`);
    if(num > 1){
        setTimeout(() =>{
            eventEmitter.emit('onping',num-1,i)
        }, 1000);
    }
    else{
        console.log(`game completed..`);
    }
});

playGame(3);
