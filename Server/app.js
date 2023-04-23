const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/config.js`)[env];


const flash = require('connect-flash');
const createError = require('http-errors');
const rateLimit = require('express-rate-limit');


const passport = require('passport');
const session = require('express-session');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Honeybadger = require('./utils/honeybadger');
const helmet = require('helmet')
const sanitizer = require("perfect-express-sanitizer");
const indexRouter = require('./routes/index');
// Set the number of threads to equal the number of cores 
process.env.UV_THREADPOOL_SIZE = config.UV_THREADPOOL_SIZE

const app = express();

const prometheus = require('prom-client');


const httpRequestDurationMicroseconds = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.5, 1, 5, 10, 30, 60, 120, 240, 480, 960],
});

const cpuUsageGauge = new prometheus.Gauge({
  name: 'cpu_usage',
  help: 'Amount of CPU time used by the application',
});

const memoryUsageGauge = new prometheus.Gauge({
  name: 'memory_usage',
  help: 'Amount of memory used by the application',
});



const requestCount = new prometheus.Counter({
  name: 'http_request_count',
  help: 'Total number of HTTP requests received',
  labelNames: ['method', 'path', 'code'],
});

const errorCount = new prometheus.Counter({
  name: 'http_request_error_count',
  help: 'Total number of HTTP requests resulting in an error response',
  labelNames: ['method', 'path', 'code'],
});

const concurrentConnections = new prometheus.Gauge({
  name: 'concurrent_connections',
  help: 'Number of concurrent connections',
});

const networkTrafficBytes = new prometheus.Counter({
  name: 'network_traffic_bytes',
  help: 'Total network traffic in bytes',
  labelNames: ['direction'], // 'in' or 'out'
});


app.use(logger('combined'));
app.use(sanitizer.clean({
  xss: true,
  noSql: true,
  sql: true
}));
Honeybadger.notify('Starting/Restarting Technoob Server');
app.use(Honeybadger.requestHandler);
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


app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.use('/', limiter);  // implementing rate limiter middleware

app.use('/', indexRouter);

app.use(Honeybadger.errorHandler)
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

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestDurationMicroseconds
      .labels(req.route.path, req.method, res.statusCode)
      .observe(duration/1000);
  });
  next();
});

setInterval(() => {
  cpuUsageGauge.set(process.cpuUsage().user / 1000000);
  memoryUsageGauge.set(process.memoryUsage().rss);
}, 10000);

// Middleware to update metrics for network traffic
app.use((req, res, next) => {
  const onData = (chunk) => {
    networkTrafficBytes.inc({ direction: 'in' }, chunk.length);
  };
  const onEnd = () => {
    networkTrafficBytes.inc({ direction: 'out' }, res.get('Content-Length') || 0);
    res.removeListener('data', onData);
    res.removeListener('end', onEnd);
  };
  res.on('data', onData);
  res.on('end', onEnd);
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const query = req.query && Object.keys(req.query).length > 0 ? JSON.stringify(req.query) : '-';
    dbQueryDurationMilliseconds.observe({ query }, duration);
  });
  next();
});

app.use((req, res, next) => {
  concurrentConnections.inc();
  res.on('finish', () => {
    concurrentConnections.dec();
  });
  next();
});
 
app.use((req, res, next) => {
  requestCount.inc({ method: req.method, path: req.path, code: res.statusCode });
  if (res.statusCode >= 400) {
    errorCount.inc({ method: req.method, path: req.path, code: res.statusCode });
  }
  next();
});

const collectDefaultMetrics = prometheus.collectDefaultMetrics;
collectDefaultMetrics();

module.exports = app;
