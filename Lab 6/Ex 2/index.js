var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen('8080',function(){
    console.log('Listening');
});

//static file
app.use(express.static('public'));

//socket setup
var io = socket(server);
io.on('connection',function(socket){
    console.log('Connection made->'+ socket.id);

    socket.on('newConnect',function(){
        console.log('Connection Accepted.');
    });

    socket.on('dis',function(){
        console.log('Disconnected...');
    });

    socket.on('sendmsg',function(msg){
        console.log('Received message: '+msg+" from client");
    });

});

