let express = require('express');
let router = express.Router();
let controller = require('../controllers/index');
let admin = controller.admin;


/* GET users listing. */
router.post('/email', admin.saveMailTemplate);

module.exports = router;
