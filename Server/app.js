const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/config/config.js`)[env];
const express = require("express");
const flash = require("connect-flash");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const Honeybadger = require("./utils/honeybadger");
const helmet = require("helmet");
const sanitizer = require("perfect-express-sanitizer");
const indexRouter = require("./routes/index");
const app = express();
const prometheus = require("prom-client");
const trafficMiddleware = require("./middleware/traffic");
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');  
const yamljs = require('yamljs');
const swaggerDocument = yamljs.load('./swagger.yaml');

const allowedOrigins = [
  "http://localhost:3000",
  "https://technoob-client-staging.herokuapp.com",
  "https://technoob-client.herokuapp.com",
  "http://127.0.0.1:3000"
];

// const swaggerOptions = { 
//   failOnErrors: true,
//   swaggerDefinition: {  
//       info: {  
//           title:'Technoob API',  
//           version:'1.0.0'  
//       }  
//   },
//   apis: ['./routes/*.js'],
// }  
//const swaggerDocs = swaggerJSDoc(swaggerOptions);  


// Set up the CORS headers
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin: ", origin)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: ["Content-Type", "Set-Cookie"],
    credentials: true,
    exposedHeaders: "Set-Cookie",
  })
);

const httpRequestDurationMicroseconds = new prometheus.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in microseconds",
  labelNames: ["method", "route", "code"],
  buckets: [0.1, 0.5, 1, 5, 10, 30, 60, 120, 240, 480, 960],
});

const cpuUsageGauge = new prometheus.Gauge({
  name: "cpu_usage",
  help: "Amount of CPU time used by the application",
});

const memoryUsageGauge = new prometheus.Gauge({
  name: "memory_usage",
  help: "Amount of memory used by the application",
});

const requestCount = new prometheus.Counter({
  name: "http_request_count",
  help: "Total number of HTTP requests received",
  labelNames: ["method", "path", "code"],
});

const errorCount = new prometheus.Counter({
  name: "http_request_error_count",
  help: "Total number of HTTP requests resulting in an error response",
  labelNames: ["method", "path", "code"],
});

const concurrentConnections = new prometheus.Gauge({
  name: "concurrent_connections",
  help: "Number of concurrent connections",
});

const networkTrafficBytes = new prometheus.Counter({
  name: "network_traffic_bytes",
  help: "Total network traffic in bytes",
  labelNames: ["direction"], // 'in' or 'out'
});

app.use(logger("combined"));
// Honeybadger.notify('Starting/Restarting Technoob Server');

app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: MongoStore.create({
      mongoUrl: config.DATABASE_URL,
      ttl: 60 * 60, // 1 hour
      autoRemove: "native",
    }),
    cookie: {
      maxAge: 60 * 60 * 1000
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig");
app.use(Honeybadger.requestHandler);
//app.use(helmet({
//crossOriginEmbedderPolicy: false
//}));

// Set up rate limit on our APIs
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

require("./config/passportConfig");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(flash());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(sanitizer.clean({
//   xss: true,
//   noSql: true,
//   sql: true,
//   sanitize: {
//     image: false
//   }
// }));

/* GET home page. */
// app.use(trafficMiddleware);
app.use("/", limiter); // implementing rate limiter middleware
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));  
app.use("/", trafficMiddleware, indexRouter);

app.use(Honeybadger.errorHandler);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // return error as json
  return res.status(err.status || 500).json({
    status: "error",
    message: err.message || err ,
  });
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    httpRequestDurationMicroseconds
      .labels(req.route.path, req.method, res.statusCode)
      .observe(duration / 1000);
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
    networkTrafficBytes.inc({ direction: "in" }, chunk.length);
  };
  const onEnd = () => {
    networkTrafficBytes.inc(
      { direction: "out" },
      res.get("Content-Length") || 0
    );
    res.removeListener("data", onData);
    res.removeListener("end", onEnd);
  };
  res.on("data", onData);
  res.on("end", onEnd);
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    const query =
      req.query && Object.keys(req.query).length > 0
        ? JSON.stringify(req.query)
        : "-";
    dbQueryDurationMilliseconds.observe({ query }, duration);
  });
  next();
});

app.use((req, res, next) => {
  concurrentConnections.inc();
  res.on("finish", () => {
    concurrentConnections.dec();
  });
  next();
});

app.use((req, res, next) => {
  requestCount.inc({
    method: req.method,
    path: req.path,
    code: res.statusCode,
  });
  if (res.statusCode >= 400) {
    errorCount.inc({
      method: req.method,
      path: req.path,
      code: res.statusCode,
    });
  }
  next();
});

const collectDefaultMetrics = prometheus.collectDefaultMetrics;
collectDefaultMetrics();

module.exports = app;
