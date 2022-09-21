var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const {log} = console;

var indexRouter = require('./routes/index');
var chatRouter = require('./routes/chat');



var app = express();

app.set('port', process.env.PORT || 3000)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')))
app.use('/', indexRouter);
app.use('/chat', chatRouter);

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
const server = app.listen(app.get('port'), ()=>log('server is on:  '+app.get('port')))

const io = require('socket.io')(server)

const users = []

io.on('connect', socket=>{
  log('someone connected')
  log(socket.handshake.query.nickName)
  
  // each new user has a room
  users.push(socket.handshake.query.nickName)
  socket.join(socket.handshake.query.nickName)

  // send private message
  socket.on('screctMsg', data=>{
    socket.to(data.to).emit('updateChatList', data)

  })

  // send to all
 
  socket.on('incomingMsg', data=>{
    // log(data)
    io.emit('updateChatList', data)
  })

 


  io.emit('newUser', users)

  socket.on('disconnect',()=>log('someone disconnected'))
})