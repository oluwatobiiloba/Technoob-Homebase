let express = require('express');
let router = express.Router();
const user = require('./users');
const auth = require('./auth');
const admin = require('./admin');
const base = `/api/v1`

const prometheus = require('prom-client');
const { register } = prometheus;

router.get('/', (req, res) => {
  res.render('index', { title: 'TechNoob API' });

});



router.use(`${base}/user`, user);
router.use(`${base}/authenticate`, auth);
router.use(`${base}/admin`, admin);

// Prometheus middleware
router.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.send(await register.metrics());
  } catch (error) {
    res.status(500).send(error);
  }
});

router.all('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: `Can't find (${req.method}) ${req.originalUrl} on this server. Please check the documentation for the correct route.`
  })

});

module.exports = router;
