let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Admin = require('../models/admin');
const Permissions = require('../models/permissions');



const authenticateMiddleware = passport.authenticate('local', {
    failureMessage: 'Invalid username or password',
    failureRedirect: '/authenticate/login',
})

const googleAuthenticateMiddleware = passport.authenticate('google', {
    scope: ['profile', 'email']
});

const googleCallbackAuthenticateMiddleware = passport.authenticate('google', {
    failureRedirect: '/authenticate/login',

});

const githubAuthenticateMiddleware = passport.authenticate('github', {
    scope: ['read:user', 'user:email', "user:follow"]
});

const githubCallbackAuthenticateMiddleware = passport.authenticate('github', {
    failureRedirect: 'auth/failed',

});

module.exports = {
    authenticateMiddleware,
    googleCallbackAuthenticateMiddleware,
    googleAuthenticateMiddleware,
    githubAuthenticateMiddleware,
    githubCallbackAuthenticateMiddleware,
    isAuthenticated(req, res, next) {

        if (req.isAuthenticated()) {
            console.log('req.user:', req.user);
            return next();
        }

        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized access'
        })
    },
    isAdmin(req, res, next) {
        if (req.isAuthenticated() && req.user.role === 'admin') {
            return next();
        }
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized access'
        })
    },
    hasPermission(perm) {
        return async (req, res, next) => {
            try {
                //console.log(req)
                // const admin = await Admin.findOne({ user_id: req.user?._id });
                const permission = await Permissions.findOne({ permission: perm });
                const permissionId = new mongoose.Types.ObjectId(permission._id);
                const admin = await Admin.findOne({ user_id: req.user?._id, permissions: { $in: [permissionId] } });
                console.log('permission:', permissionId)
                console.log('admin:', admin)

                if (!admin || !admin.isActive) {
                    return res.status(401).json({
                        status: 'fail',
                        message: 'Unauthorized access yet'
                    })
                }
                console.log('has permission')
                next();
            } catch (err) {
                next(err);
            }
        };
    }





};