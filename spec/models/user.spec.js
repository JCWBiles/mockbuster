var mongoose = require('mongoose');

require('../mongodb_helper')

var User = require('../../models/user');

describe('User model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.users.drop(function() {
          done();
      });
  });
  it('creates a new user', function(){
    var user = new User({firstname:"John", lastname: "Doe", email: "j.doe@yahoo.com", password: "password123"});

    expect(user.firstname).toEqual('John');
    expect(user.lastname).toEqual('Doe');
    expect(user.email).toEqual('j.doe@yahoo.com');
  });
});
