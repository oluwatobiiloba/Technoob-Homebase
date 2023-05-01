let express = require('express');
let router = express.Router();
const user = require('./users');

router.use("/users", usersRouter);

/* GET home page. */
router.get('/', user);

router.all('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: `Can't find (${req.method}) ${req.originalUrl} on this server`
  })

});

module.exports = router;
