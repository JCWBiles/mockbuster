var env = require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var handlebars = require('handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var pg = require('pg');
var pg_store = require('connect-pg-simple');
var methodOverride = require('method-override');
var flash = require('express-flash-messages');
var bcrypt = require('bcrypt');
var db = require('./config')
// var cors = require('cors');
var connectionString = require('pg-connection-string');
// var parse = require('pg-connection-string').parse;
// var config = parse('postgres://student:MaDaOn96!@localhost:5432/mockbuster');
var pool = require('pg-pool');


var landingRouter = require('./routes/landing');
// var userRouter = require('./routes/user');
// var authRouter = require('./routes/auth');
var filmRouter = require('./routes/films');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//use sessions for tracking logins
// var db = mongoose.connection;
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());
// app.use(session({
//   secret: 'work harder',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: db })
// }));
app.use(flash())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//
// route setup
app.use('/', landingRouter);
app.use('/films', filmRouter);

// app.use('/user', userRouter);
// app.use('/auth', authRouter);
// // app.use('/account', accountRouter);
// // app.use(methodOverride('_method'));
//

var config = {
  user: 'student',
  host: 'localhost',
  database: 'mockbuster',
  password: 'MoSalah11',
  port: 5432,                  //Default port, change it if needed
};
// pool takes the object above -config- as parameter
var pool = new pg.Pool(config);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/', (req, res) => {
//     res.send('Testing server 3!');
// });

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

module.exports = app;
