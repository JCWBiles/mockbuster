var express = require('express')
var bodyParser = require('body-parser')
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
var cors = require('cors');
var connectionString = require('pg-connection-string');
var crypto = require('crypto');
var db = require('./queries');


var filmRouter = require('./routes/films');
var landingRouter = require('./routes/landing');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

var port = 3000

var app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)




// var api_key = '6d8a7959d974d5ff930a5445dfc24f7c-7238b007-ef30c265';
// var domain = 'sandbox41dc7552a0bc4643a48f3ae0d19676d8.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
// var data = {
//   from: 'MockBuster <musiquegurll@yahoo.co.uk>',
//   to: 'musiquegurll@yahoo.co.uk',
//   subject: 'Hello',
//   text: 'Welcome to MockBuster!We hope you enjoy our wide range of movies!'
// };
//
// mailgun.messages().send(data, function (error, body) {
//   if (error){
//     console.log(error);
//   }
//   console.log(body);
// });



// //Your api key, from Mailgun’s Control Panel
//     var api_key = '6d8a7959d974d5ff930a5445dfc24f7c-7238b007-ef30c265';
//
//     //Your domain, from the Mailgun Control Panel
//     var domain = 'sandbox41dc7552a0bc4643a48f3ae0d19676d8.mailgun.org';
//
//     //Your sending email address
//     var from_who = 'musiquegurll@yahoo.co.uk';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// route setup



app.use('/', landingRouter);
app.use('/films', filmRouter);
// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API - Testing Mockbuster' })
// })
app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/auth', authRouter);
// // // app.use('/account', accountRouter);
// // // app.use(methodOverride('_method'));
app.get('/films/:id', db.getFilmById)




// // Send a message to the specified email address when you navigate to /submit/someaddr@email.com
//     // The index redirects here
//     app.get('/submit/:email', function(req,res) {
//     //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//     var data = {
//     //Specify email data
//       from: from_who,
//     //The email to contact
//       to: req.params.email,
//     //Subject and text data
//       subject: 'Hello from Mailgun',
//       html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.email + '">Click here to add your email address to a mailing list</a>'
//     }
//     //Invokes the method to send emails given the above data with the helper library
//     mailgun.messages().send(data, function (err, body) {
//         //If there is an error, render the error page
//         if (err) {
//             res.render('error', { error : err});
//             console.log("got an error: ", err);
//         }
//         //Else we can greet    and leave
//         else {
//             //Here "submitted.jade" is the view file for this landing page
//             //We pass the variable "email" from the url parameter in an object rendered by Jade
//             res.render('submitted', { email : req.params.email });
//             console.log(body);
//         }
//     });
// });
//     app.get('/validate/:mail', function(req,res) {
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//     var members = [
//       {
//         address: req.params.email
//       }
//     ];
//     //For the sake of this tutorial you need to create a mailing list on Mailgun.com/cp/lists and put its address below
//     mailgun.lists('NAME@MAILINGLIST.COM').members().add({ members: members, subscribed: true }, function (err, body) {
//       console.log(body);
//       if (err) {
//             res.send("Error - check console");
//       }
//       else {
//         res.send("Added to mailing list");
//       }
//     });
//     })
//     app.get('/invoice/:email', function(req,res){
//     //Which file to send? I made an empty invoice.txt file in the root directory
//     //We required the path module here..to find the full path to attach the file!
//     var path = require("path");
//     var fp = path.join(__dirname, 'invoice.txt');
//     //Settings
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//     var data = {
//       from: from_who,
//       to: req.params.email,
//       subject: 'An invoice from your friendly hackers',
//       text: 'A fake invoice should be attached, it is just an empty text file after all',
//       attachment: fp
//     };
//     //Sending the email with attachment
//     mailgun.messages().send(data, function (error, body) {
//         if (error) {
//             res.render('error', {error: error});
//         }
//             else {
//             res.send("Attachment is on its way");
//             console.log("attachment sent", fp);
//             }
//         });
//     })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



// //use sessions for tracking logins
// // var db = mongoose.connection;
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false
// }));
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// // app.use(cors());
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
