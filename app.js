import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.listen(3000)
console.log('app running on port ', 3000);

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
var bcrypt = require('bcrypt')

const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

var libraryRouter = require('./routes/library');
// var postsRouter = require('./routes/posts');
// var userRouter = require('./routes/user');
// var authRouter = require('./routes/auth');
// var mainRouter = require('./routes/main');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// route setup
app.use('/', libraryRouter);
// app.use('/posts', postsRouter);
// app.use('/user', userRouter);
// app.use('/auth', authRouter);
// app.use('/main', mainRouter);
// app.use('/posts', commentRouter);
app.use(methodOverride('_method'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

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
// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening`)
})

module.exports = app;