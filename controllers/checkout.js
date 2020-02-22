var checkout = require('../models/checkout');
var bcrypt = require('bcrypt');
var saltCount = 10;
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var CheckoutController = {
  Index: function(req, res) {
    res.status(201).render('checkout/index');
  },

  Send: function(req, res) {
    res.status(201).redirect('/checkout');
  },
};









module.exports = CheckoutController;
