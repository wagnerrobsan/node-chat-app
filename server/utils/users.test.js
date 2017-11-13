const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Wagner',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Marcia',
      room: 'Node Course'
    }, {
      id: '3',
      name: 'Maluiza',
      room: 'Piano Course'
    }];
  });

  it('should add a new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Wagner',
      room: 'Cobham TeraVM'
    };
    var resUser =users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', ()=>{
    var userId = '1';
    var removedUser = users.removeUser(userId);

    expect(removedUser.id).toBe(userId);
    expect(removedUser.name).toBe('Wagner');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', ()=>{
    var userId = '99';
    expect(users.users.length).toBe(3);

    var removedUser = users.removeUser(userId);

    expect(removedUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () =>{
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
    expect(user.name).toBe('Wagner');
    expect(user.room).toBe('Node Course');
  });

  it('should not find user', ()=>{
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
    expect(typeof user).toBe('undefined');
  });

  it('should return names for Node course', () =>{
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Wagner', 'Marcia']);
  });

  it('should return names for Piano course', () =>{
    var userList = users.getUserList('Piano Course');

    expect(userList).toEqual(['Maluiza']);
  });

});
