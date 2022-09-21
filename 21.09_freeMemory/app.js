var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const {log} = console

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


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
const server = app.listen(app.get('port'),()=>console.log('Server is on '+app.get('port')))

const io = require('socket.io')(server)
const {usedMenPresentage, freeMenPresentage} =require('./test')

io.on('connection', socket=>{
  log('someone is connected to ws server')

  // send message each 1000ms
  let intervalID=setInterval(()=>{
    socket.emit('memData', {usedMenPresentage, freeMenPresentage})

  }, 100)

  // check if someone is disconnect
  socket.on('disconnect',()=>{
    log('someone is disconnected')
    clearInterval(intervalID)
    log(intervalID)
  })
})