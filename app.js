var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var pg = require('pg');
var pg_store = require('connect-pg-simple');
var methodOverride = require('method-override');
var flash = require('express-flash-messages');
var bodyParser = require('body-parser')
var cors = require('cors')
var { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// const getBooks = (request, response) => {
//   pool.query('SELECT * FROM books', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const addBook = (request, response) => {
//   const { author, title } = request.body
//
//   pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
//     if (error) {
//       throw error
//     }
//     response.status(201).json({ status: 'success', message: 'Book added.' })
//   })
// }
//
// app
//   .route('/books')
//   // GET endpoint
//   .get(getBooks)
//   // POST endpoint
//   .post(addBook)
//
// // Start server
// app.listen(process.env.PORT || 3002, () => {
//   console.log(`Server listening`)
// })
