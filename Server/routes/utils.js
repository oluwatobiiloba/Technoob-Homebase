const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const utils = controller.utils;
const middleware = require('../middleware/index');

router.post('/upload-file', middleware.uploadStrategy.file, utils.upload_file)
router.post('/upload-image', middleware.uploadStrategy.image, utils.upload_file)

module.exports = router;
