var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correct message object',()=>{
    var from = 'wagner@cobham.com';
    var text = 'Welcome back to the game!';

    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var from = 'Wagner';
    var latitude = 30;
    var longitude = 50;
    var url = `https://google.com/maps?q=${latitude},${longitude}`;

    var message = generateLocationMessage(from, latitude, longitude);
    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
