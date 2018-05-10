// 引入模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 生成 express 实例
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 模板引擎：ejs
app.set('view engine', 'ejs');

app.use(logger('dev')); // 使得 express 实例具备了记录日志的功能
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源位于 public 目录下
app.use(express.static(path.join(__dirname, 'public')));
// 访问项目根时使用 indexRouter 中间件
app.use('/', indexRouter);
// 访问 /users 目录下资源使用 usersRouter 中间件
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

module.exports = app;
