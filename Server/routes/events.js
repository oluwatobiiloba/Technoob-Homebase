const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const events = controller.events;
const middleware = require('../middleware/index');

router.get('/all',  middleware.auth.isAuthenticated ,events.get_all)
router.get('/metrics',  middleware.auth.isAuthenticated, events.getMetrics)
router.get('/get/:id',  middleware.auth.isAuthenticated, events.get)
router.post('/create',  middleware.auth.isAuthenticated, middleware.auth.hasPermission('admin:CreateEvents'),events.create)
router.get('/count',  middleware.auth.isAuthenticated, events.count)
router.post('/delete/:id', middleware.auth.isAuthenticated, middleware.auth.hasPermission('admin:RemoveEvents'),events.remove)
router.get('/activity',middleware.auth.isAuthenticated, events.getActivity)

module.exports = router;
