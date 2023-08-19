let express = require('express');
let router = express.Router();
let controller = require('../controllers/index');
let auth = controller.auth;




/* GET users listing. */
router.post('/login', auth.login);
// router.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/failed', failureFlash: true }));
//comment
router.post('/register', auth.register);
router.post('/logout', auth.logout);
router.post('verify-email', auth.verifyEmail)
router.post('/forgot-password', auth.forgotPasswordEmail)
router.post('/reset-password', auth.reset_password)
router.get('/oauth2/google', auth.googlelogin);
router.get('/oauth2/google/callback', auth.googleCallback, (req, res) => { res.redirect('/api/v1/user/dashboard') });
router.get('/oauth2/github', auth.githublogin);
router.get('/oauth2/github/callback', auth.githubCallback, (req, res) => { res.redirect('/api/v1/user/dashboard') });

router.post('/oauth2/github/auth/email', auth.githubEmail);
router.get('/oauth2/github/auth/failed', auth.renderEmail);


module.exports = router;