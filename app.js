var express = require('express');
var bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
var handlebars = require('handlebars');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var pg = require('pg');
var pg_store = require('connect-pg-simple');
var methodOverride = require('method-override');
var flash = require('express-flash-messages');
var bcrypt = require('bcrypt');
var connectionString = require('pg-connection-string');

var db = require('./queries');

var filmRouter = require('./routes/films');
var landingRouter = require('./routes/landing');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');
var accountRouter = require('./routes/account');

var checkoutRouter = require('./routes/checkout');

var port = 3000

var app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// route setup

app.use('/', landingRouter);
app.use('/films', filmRouter);
app.use('/films/action', filmRouter);
app.use('/films/biopic', filmRouter);
app.use('/films/comedy', filmRouter);
app.use('/films/crime', filmRouter);
app.use('/films/drama', filmRouter);
app.use('/films/fantasy', filmRouter);
app.use('/films/history', filmRouter);
app.use('/films/horror', filmRouter);
app.use('/films/kids', filmRouter);
app.use('/films/legal', filmRouter);
app.use('/films/musical', filmRouter);
app.use('/films/romance', filmRouter);
app.use('/films/sports', filmRouter);
app.use('/films/sports', filmRouter);
app.use('/films/superhero', filmRouter);
app.use('/films/thriller', filmRouter);
app.use('/films/war', filmRouter);
app.use('/films/a_to_e', filmRouter);
app.use('/films/f_to_j', filmRouter);
app.use('/films/k_to_o', filmRouter);
app.use('/films/p_to_t', filmRouter);
app.use('/films/u_to_z', filmRouter);
app.use('/films/zero_to_nine', filmRouter);
// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API - Testing Mockbuster' })
// })
app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/auth', authRouter);
<<<<<<< HEAD
app.use('/account', accountRouter);
app.use(methodOverride('_method'));
=======
app.use('/checkout', checkoutRouter);
// // // app.use('/account', accountRouter);
// // // app.use(methodOverride('_method'));
// app.get('/films/:id', db.getFilmById)
>>>>>>> 502d0940d6c121a1d63c831c1fc31ef142fef5bf

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


//use sessions for tracking logins
// var db = mongoose.connection;
app.use(session({
  secret: 'your secret',
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: false}));
//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // app.use(session({
// //   secret: 'work harder',
// //   resave: true,
// //   saveUninitialized: false,
// //   store: new MongoStore({ mongooseConnection: db })
// // }));

app.use(flash());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//
// // app.get('/', (req, res) => {
// //     res.send('Testing server 3!');
// // });
//
// app.listen(3000, () => console.log('Gator app listening on port 3000!'));
//
module.exports = app;
