let express = require('express');
let router = express.Router();
const user = require('./users');
const auth = require('./auth');

router.use("/user", user);
router.use("/authenticate", auth);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });

});

router.all('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: `Can't find (${req.method}) ${req.originalUrl} on this server: ${req.baseUrl}`
  })

});

module.exports = router;
