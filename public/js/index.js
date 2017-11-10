var socket = io();

socket.on('connect', function (){
  console.log('Connected to Server');
});

socket.on('disconnect', function (){
  console.log('Disconnected from Server');
});

socket.on('newMessage', (message)=>{
  console.log(message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e){
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function (){

  });
});
