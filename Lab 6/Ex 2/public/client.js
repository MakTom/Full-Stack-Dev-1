// make connection
console.log("Inside client");
var socket = io.connect('http://localhost:8080');

//Query DOM
var connect = document.getElementById('connect');
var disconnect = document.getElementById('disconnect');
var sendmsg = document.getElementById('send');

//Emit events
connect.addEventListener('click',function(){
    console.log("Emiting");
    socket.emit('newConnect','New Connection');
});

disconnect.addEventListener('click',function(){
    console.log("Disconnecting");
    socket.emit('dis','Disconnecting');
});

sendmsg.addEventListener('click',function(){
    socket.emit('sendmsg','Hello Server!');
});