const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const jobs = controller.jobs;
const middleware = require('../middleware/index');

router.get('/all' ,jobs.get_all)
router.get('/metrics', jobs.getMetrics)
router.get('/get/:id', jobs.get)
router.post('/create',  middleware.auth.isAuthenticated, middleware.auth.hasPermission('admin:Createjobs'),jobs.create)
router.get('/count',  middleware.auth.isAuthenticated, jobs.count)
router.post('/delete/:id', middleware.auth.isAuthenticated, middleware.auth.hasPermission('admin:Removejobs'),jobs.remove)
router.get('/activity', middleware.auth.isAuthenticated, jobs.getActivity)

module.exports = router;
