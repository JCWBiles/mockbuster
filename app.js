var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var mailgun = require('mailgun-js');
var flash = require('express-flash-messages');
var Handlebars = require('hbs');
// var simpleWebRTC = require('simplewebrtc');
// var adapter = require('webrtc-adapter');
//Image upload setup
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  },
});
var upload = multer({ storage:storage })


var filmRouter = require('./routes/films');
var landingRouter = require('./routes/landing');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');
var accountRouter = require('./routes/account');
var checkoutRouter = require('./routes/checkout');
var blogRouter = require('./routes/blog');
// var chatRouter = require('./routes/chat');
var quizRouter = require('./routes/quiz');
var videoRouter = require('./routes/videochat');
var basketRouter = require('./routes/basket');
var employeeRouter = require('./routes/employee');
var managerRouter = require('./routes/manager');
var man_authRouter = require('./routes/man_auth');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3001);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Register Partials
Handlebars.registerPartials(path.join(__dirname + '/views/partials'));

// Register Helpers
Handlebars.registerHelper('each_upto', function(ary, max, options)
{
  if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

//use sessions for tracking logins
var db = mongoose.connection;
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

//setup flash
app.use(flash());

app.use(function(req, res, next){
// if there's a flash message in the session request, make it available in the response, then delete it
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static('public/uploads'));
app.use(session({
  secret: 'work harder',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: db })
}));

// route setup
app.use('/', landingRouter);
app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/auth', authRouter);
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
app.use('films/search', filmRouter);
app.use('films/autocomplete', filmRouter);
app.use('/cart', filmRouter);
app.use('/account', accountRouter);
app.use('/account/completed', accountRouter);
app.use('/checkout', checkoutRouter);
app.use('/checkout/thank_you', checkoutRouter);
app.use('/blog', blogRouter);
// app.use('/chat', chatRouter);
// app.use('/chat/room', chatRouter);
app.use('/quiz', quizRouter);
app.use('/quiz/level', quizRouter);
app.use('/quiz/game', quizRouter);
app.use('/quiz/mediumgame', quizRouter);
app.use('/quiz/difficultgame', quizRouter);
app.use('/quiz/end', quizRouter);
app.use('/quiz/highscores', quizRouter);
app.use('/videochat', videoRouter);
app.use('/films', basketRouter);
app.use('/employee', employeeRouter);
app.use('/employee/change', employeeRouter);
app.use('/employee/em_hub', employeeRouter);
app.use('/employee/account', employeeRouter);
app.use('/employee/update', employeeRouter);
app.use('/employee/em_film_lib', employeeRouter);
app.use('/employee/em_film_creation', employeeRouter);
app.use('/employee/feedback', employeeRouter);
app.use('/employee/individualfeedback', employeeRouter);
app.use('/employee/suggestions', employeeRouter);
app.use('/employee/complaints', employeeRouter);
app.use('/manager', managerRouter);
app.use('/manager/login', managerRouter);
app.use('/manager/account', managerRouter);
app.use('/manager/hub', managerRouter);
app.use('/manager/hr', managerRouter);
app.use('/manager/staff_creation', managerRouter);
app.use('/manager/completed', managerRouter);
app.use('/manager/messages', managerRouter);
app.use('/manager/individualmsg', managerRouter);
app.use('/man_auth', man_authRouter);
app.use(methodOverride('_method'));

//CHAT ROUTES

users = {};
var Chat = require('./models/chat');
app.get('/chat', function(req, res){
  res.render('chat/index')
})
io.sockets.on('connection', function(socket){
  var query = Chat.find({});
  query.sort('-date').limit(11).exec(function(err, docs){
    if (err) { throw err }
    console.log('sending old msgs!')
    socket.emit('load old msgs', docs);
  })
  socket.on('new user', function(data, callback){
    if(data in users){
      callback(false);
    }else{
      callback(true);
      socket.nickname = data;
      users[socket.nickname] = socket;
      updateNames();
      // socket.broadcast.emit('new message', data);
    }
  });

  function updateNames(){
    io.sockets.emit('usernames', Object.keys(users));
  }

  socket.on('send message', function(data, callback){
    var message = data.trim();
    if (message.substr(0, 1) === '@') {
      message = message.substr(1);
      var ind = message.indexOf(' ');
      if (ind !== -1) {
        var name = message.substring(0, ind);
        var message = message.substring(ind + 1);
        if (name in users) {
          users[name].emit('private message', { message: message, name: socket.nickname })
          console.log('private message');
        }else {
          callback('Error! enter a valid user.')
        }
      }else {
        callback('Error! Please enter a message for you private message.')
      }
    }else {
      var message = new Chat({message: message, name: socket.nickname});
      message.save(function(err){
        if (err) {throw err}
        io.sockets.emit('new message', { message: message, name: socket.nickname });
      })
    }
  });

  socket.on('disconnect', function(data){
    if(!socket.nickname) return;
    delete users[socket.nickname];
    updateNames();
  });
});

//route for initial USER image upload
var User = require('./models/user');
app.post('/user', upload.single('imageUrl'), function(req, res){
  if(req.file){
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email:  req.body.email,
    password: req.body.password,
    address_first_line: req.body.address_first_line,
    address_second_line: req.body.address_second_line,
    address_town: req.body.address_town,
    address_post_code: req.body.address_post_code,
    card_holder: req.body.card_holder,
    card_number: req.body.card_number,
    expiration_year: req.body.expiration_year,
    expiration_month: req.body.expiration_month,
    cvc: req.body.cvc,
    imageUrl: req.file.path,
  });
    console.log(req.body.firstname);
    console.log(req.body.email);
    console.log(req.file);
    user.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.userId = user._id;
        res.status(201).redirect('/films')
      }
  });
} else {
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email:  req.body.email,
    password: req.body.password,
    address_first_line: req.body.address_first_line,
    address_second_line: req.body.address_second_line,
    address_town: req.body.address_town,
    address_post_code: req.body.address_post_code,
    card_holder: req.body.card_holder,
    card_number: req.body.card_number,
    expiration_year: req.body.expiration_year,
    expiration_month: req.body.expiration_month,
    cvc: req.body.cvc,
  });
    console.log(req.body.firstname);
    console.log(req.body.email);
    user.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.userId = user._id;
        res.status(201).redirect('/films')
      }
    });
  }
});

//route for editing USER account image
app.post('/account/upload/:_id', upload.single('imageUrl'), function (req, res, next) {
  console.log(req.file)
  User.findOneAndUpdate({_id: req.params._id}, {$set: { imageUrl: req.file.path }, overwrite: true} , function(err){
    if (err) { throw err; }
    res.status(201).redirect('/account');
  });
});

//route for initial MANAGER image upload
var Manager = require('./models/manager');
app.post('/manager', upload.single('imageUrl'), function(req, res){
  if(req.file){
  var manager = new Manager({
    man_firstname: req.body.man_firstname,
    man_lastname: req.body.man_lastname,
    man_email: req.body.man_email,
    man_password: req.body.man_password,
    imageUrl: req.file.path,
  });
    console.log(req.body.man_firstname);
    console.log(req.body.man_email);
    console.log(req.file);
    manager.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.managerId = manager._id;
        res.status(201).redirect('/manager/hub')
      }
  });
} else {
  var manager = new Manager({
    man_firstname: req.body.man_firstname,
    man_lastname: req.body.man_lastname,
    man_email: req.body.man_email,
    man_password: req.body.man_password,
  });
    console.log(req.body.man_firstname);
    console.log(req.body.Man_email);
    manager.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.managerId = manager._id;
        res.status(201).redirect('/manager/hub')
      }
    });
  }
});

//route for editing MANAGER account image
app.post('/manager/account/upload/:_id', upload.single('imageUrl'), function (req, res, next) {
  console.log(req.file)
  Manager.findOneAndUpdate({_id: req.params._id}, {$set: { imageUrl: req.file.path, man_firstname: req.body.man_firstname, man_lastname: req.body.man_lastname, man_email: req.body.man_email }, overwrite: true} , function(err){
    if (err) { throw err; }
    res.status(201).redirect('/manager/account');
  });
});

//route for initial EMPLOYEE image upload
var Employee = require('./models/employee');
app.post('/manager/staff_creation', upload.single('imageUrl'), function(req, res){
  if(req.file){
  var employee = new Employee({
    em_first_name: req.body.em_first_name,
    em_last_name: req.body.em_last_name,
    employee_number: req.body.employee_number,
    em_email: req.body.em_email,
    staff_id: req.body.staff_id,
    password: req.body.password,
    em_address_line1: req.body.em_address_line1,
    em_address_line2: req.body.em_address_line2,
    em_address_city: req.body.em_address_city,
    em_address_postcode: req.body.em_address_postcode,
    em_tel: req.body.em_tel,
    imageUrl: req.file.path,
  });
    console.log(req.body.em_first_name);
    console.log(req.body.em_email);
    console.log(req.file);
    employee.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.employeeId = employee._id;
        res.status(201).redirect('/manager/completed')
      }
  });
} else {
  var employee = new Employee({
    em_first_name: req.body.em_first_name,
    em_last_name: req.body.em_last_name,
    employee_number: req.body.employee_number,
    em_email: req.body.em_email,
    staff_id: req.body.staff_id,
    password: req.body.password,
    em_address_line1: req.body.em_address_line1,
    em_address_line2: req.body.em_address_line2,
    em_address_city: req.body.em_address_city,
    em_address_postcode: req.body.em_address_postcode,
    em_tel: req.body.em_tel,
  });
    console.log(req.body.em_first_name);
    console.log(req.body.em_email);
    employee.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.employeeId = employee._id;
        res.status(201).redirect('/manager/completed')
      }
    });
  }
});

//route for editing EMPLOYEE account image
app.post('/employee/account/upload/:_id', upload.single('imageUrl'), function (req, res, next) {
  console.log(req.file)
  Employee.findOneAndUpdate({_id: req.params._id}, {$set: { imageUrl: req.file.path }, overwrite: true} , function(err){
    if (err) { throw err; }
    res.status(201).redirect('/employee/account');
  });
});

//route for initial FILMS image upload

var Films = require('./models/films');
app.post('/employee/film_creation', upload.single('imageUrl'), function(req, res){
  if(req.file){
  var films = new Films({
    name: req.body.name,
    genres: req.body.genres,
    actors: req.body.actors,
    directors: req.body.directors,
    date: req.body.date,
    price: req.body.price,
    description: req.body.description,
    trailerUrl: req.body.trailerUrl,
    modal: req.body.modal,
    imageUrl: req.file.path,
  });
    console.log(req.body.name);
    console.log(req.body.date);
    console.log(req.file);
    films.save(function(err) {
      if (err) { throw err; }
      else {
        res.status(201).redirect('/employee/em_film_lib')
      }
  });
} else {
  var films = new Films({
    name: req.body.name,
    genres: req.body.genres,
    actors: req.body.actors,
    directors: req.body.directors,
    date: req.body.date,
    price: req.body.price,
    description: req.body.description,
    trailerUrl: req.body.trailerUrl,
    modal: req.body.modal,
  });
    console.log(req.body.name);
    console.log(req.body.date);
    films.save(function(err) {
      if (err) { throw err; }
      else {
        res.status(201).redirect('/employee/em_film_lib')
      }
    });
  }
});

//route for editing FILMS image
app.post('/employee/film/upload/:_id', upload.single('imageUrl'), function (req, res, next) {
  console.log(req.file)
  if(req.file){
  Films.findOneAndUpdate({_id: req.params._id}, {$set: { imageUrl: req.file.path,
     name: req.body.name,
     genres: req.body.genres,
     actors: req.body.actors,
     directors: req.body.directors,
     date: req.body.date,
     price: req.body.price,
     description: req.body.description }, overwrite: true} , function(err){
    if (err) { throw err; }
    res.status(201).redirect('/employee/em_film_lib');
  });
}else{
  Films.findOneAndUpdate({_id: req.params._id}, {$set: {
     name: req.body.name,
     genres: req.body.genres,
     actors: req.body.actors,
     directors: req.body.directors,
     date: req.body.date,
     price: req.body.price,
     description: req.body.description }, overwrite: true} , function(err){
    if (err) { throw err; }
    res.status(201).redirect('/employee/em_film_lib');
  });
}
});

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

module.exports = app;
