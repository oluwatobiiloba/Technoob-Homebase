let express = require('express');
let router = express.Router();
let controller = require('../controllers/index');
let users = controller.users;


/* GET users listing. */
router.get('/', users.getAll);

module.exports = router;
