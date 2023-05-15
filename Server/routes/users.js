const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const users = controller.users;
const middleware = require('../middleware/index');


//contact us route without authentication
router.post('/contact-us', users.contact_us)
router.post('/mailing-list', users.mailing_list)

//middleware to check if user is authenticated
router.use(middleware.auth.isAuthenticated)

/* GET users listing. */
router.get('/dashboard', users.dashboard);
router.post('/dashboard', users.dashboard);
router.post('/edit', users.edit)
router.post('/edit-password', users.editPassword)
router.post('/edit-photo', users.editPhoto)
router.post('/deactivate', users.deactivate)
router.post('/activate', users.activate)
router.post('/delete', users.delete)
router.post('/link-github', users.linkGithub)
router.get('/:id', users.getOne)
router.get('/', users.getAll)


module.exports = router;
