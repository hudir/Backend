var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {log} = console

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { Socket } = require('dgram');

var app = express();
// setting port 
app.set('port', process.env.PORT || 3000)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
const server = app.listen(app.get('port'), ()=>log('the server is running on port: '+app.get('port')))

// start Websocket (ws) Server
// log(server)

const io = require('socket.io')(server)
// events
io.on('connection', (socket)=>{
  log("somebody is connected")
  socket.on('messageName', message=>{
    log(message)
    // response from server
    // socket.emit('response', "Hello client")
    // listener
    // socket.on("response", msg=>log(msg))
    socket.broadcast.emit('socketEmitter', 'soceket emit message')
  })
  // broadcasting message to every client
  io.emit('generalMessage', 'Hello everyone')
  // socket.emit('socketEmitter', 'soceket emit message')

  // sending some random stuff
  // setInterval(()=>{
  //   io.emit('data', Math.floor(Math.random()*10))
  // } , 2000)

  // broadcasting message

  socket.on('stop', msg=>{
    socket.disconnect()
  })
})