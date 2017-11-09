var socket = io();

socket.on('connect', function (){
  console.log('Connected to Server');

  socket.emit('createMessage', {
    to: 'server@cobham.com',
    text: 'Hey buddy, could you please help me out?' 
  });

});

socket.on('disconnect', function (){
  console.log('Disconnected from Server');
});

socket.on('newMessage', (message)=>{
  console.log(message);
});
