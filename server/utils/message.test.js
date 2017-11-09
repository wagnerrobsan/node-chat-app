var expect = require('expect');
var {generateMessage} = require('./message');

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
