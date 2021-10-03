const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const moment = require('moment');
const formatMessage = require('./utils/message');
const mongoose = require("mongoose");
const chatHistory = require("./model/chatHistory");
const events = require("./model/event");

const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/user');

const connectionString = "mongodb://localhost:27017/";
mongoose.connect(connectionString, { useNewUrlParser: true } ).then( () => { 
  console.log("Mongoose connected successfully ");
 },
  error => { 
    console.log("Mongoose could not connected to database  : " + error); 
  }
);

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
const botName = 'Chat Application';

// Run when client connects
io.on('connection', socket => {

  // Join Room
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    console.log("New Socket connected: ");
    const event = new events({  
      eventName: "Username-Defined",
      eventDescr: "SocketID: "+socket.id +" added " +user.username,
      eventDate:moment().format('h:mm a'),
      eventOwner:botName
    });  
    event.save((err)=>{
      if(err){
        console.log("Error Saving 'Event' to Database");
      }
    });
    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome!'));
    console.log(botName);
    console.log("New User Joined : "+username);
    console.log("New User Room: "+room);
    const event1 = new events({  
      eventName: "User Joined Room",
      eventDescr: "User "+user.username +" joined "+user.room,
      eventDate:moment().format('h:mm a'),
      eventOwner:user.username
    });  
    event1.save((err)=>{
      if(err){
        console.log("Error Saving 'Event' to Database");
      }
    });
    // Broadcast when a user connects
    socket.broadcast.to(user.room).emit('message',formatMessage(botName, `${user.username} has joined the chat`));

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
  const user = getCurrentUser(socket.id);
  console.log("Chat History: ");
  console.log("Message: "+user.username);
  console.log("Message: "+msg);
  console.log("Message: "+user.room);
  console.log("Message: "+moment().format('h:mm a'));
  const chatmsg = new chatHistory({  
    username: user.username,
    message: msg,
    room:user.room,
    date:moment().format(),
    socketId:socket.id
  });  
  chatmsg.save((err)=>{
    if(err){
      console.log("Error Saving 'Event' to Database");
    }
    else{
      io.to(user.room).emit('message', formatMessage(user.username, msg,user.room));
    }
  });
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {

    const user = userLeave(socket.id);
    
    if (user) {

      const event = new events({  
        eventName: "User Changed Room",
        eventDescr: "User "+user.username +" left "+user.room,
        eventDate:moment().format('h:mm a'),
        eventOwner:user.username
      });  
      event.save((err)=>{
        if(err){
          console.log("Error Saving 'Event' to Database");
        }
      });

      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`)
      );
      

      console.log(botName);
      console.log("Message: "+user.username);
      console.log("Message: "+"left "+user.room);
      console.log("Message: "+moment().format('h:mm a'));
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
  
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



