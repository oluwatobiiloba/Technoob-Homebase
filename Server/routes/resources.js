const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const resources = controller.resources;
const middleware = require('../middleware/index');

router.get('/all', resources.get_all)
router.get('/get/:id', resources.get)
router.get('/download/:id', resources.download)
router.post('/create', resources.create)
router.get('/count', resources.count)
router.post('/delete/:id', middleware.auth.isAuthenticated, middleware.auth.hasPermission('admin:RemoveResource'),resources.remove)
router.post('/rate/:id', middleware.auth.isAuthenticated, resources.rate)
router.get('/activity',middleware.auth.isAuthenticated, resources.getActivity)

module.exports = router;
