const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/config.js`)[env];


const flash = require('connect-flash');
const createError = require('http-errors');
const rateLimit = require('express-rate-limit');
const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Honeybadger = require('./utils/honeybadger');
const helmet = require('helmet')
const sanitizer = require("perfect-express-sanitizer");
const indexRouter = require('./routes/index');
// Set the number of threads to equal the number of cores 
process.env.UV_THREADPOOL_SIZE = config.UV_THREADPOOL_SIZE

const app = express();

app.use(sanitizer.clean({
  xss: true,
  noSql: true,
  sql: true
}));
app.use(Honeybadger.requestHandler)
app.use(Honeybadger.errorHandler)
app.use(helmet());    
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


// Set up rate limit on our APIs
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour"
})

require('./config/passportConfig');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.use('/', limiter);  // implementing rate limiter middleware

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});


module.exports = app;
