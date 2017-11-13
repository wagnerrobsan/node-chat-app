const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () =>{
  it('should reject non-string values', ()=>{
    var name = 124;
    var room = {name: 'error'};

    expect(isRealString(name)).toBe(false);
    expect(isRealString(room)).toBe(false);
  });

  it('should reject string with only spaces', ()=>{
    var spaces = '        ';
    expect(isRealString(spaces)).toBe(false);
  });

  it('should allow string with non-space characters', ()=>{
    var valid = '     .     232     ';
    expect(isRealString(valid)).toBe(true);
  });
});
