const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('new user connected');
  socket.on('createMessage', (message)=>{
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });
  });

  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  });

});

server.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});

// implement 2 events
// server to the client -> newMessage (from, text, createdAt)
 /// in the server/client side, to listen for an event I've to use socket.on
/// in the server/client side, to emi
// client to the server -> createMessage (to, text)
