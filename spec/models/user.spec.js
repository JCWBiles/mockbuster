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
    var user = new User({firstname:"John", lastname: "Doe", email: "j.doe@yahoo.com", password: "password123", address_first_line: "address1", address_second_line: "address2", address_town: "address town", address_post_code: "address post code", card_holder: "card holder name", card_number: "1234567812345678", expiration_year: "2020", expiration_month: "12", cvc: "786"});

    expect(user.firstname).toEqual('John');
    expect(user.lastname).toEqual('Doe');
    expect(user.email).toEqual('j.doe@yahoo.com');
    expect(user.address_first_line).toEqual('address1');
    expect(user.address_second_line).toEqual('address2');
    expect(user.address_town).toEqual('address town');
    expect(user.address_post_code).toEqual('address post code');
    expect(user.card_holder).toEqual('card holder name');
    expect(user.card_number).toEqual('1234567812345678');
    expect(user.expiration_year).toEqual('2020');
    expect(user.expiration_month).toEqual('12');
    expect(user.cvc).toEqual('786');
  });
});
