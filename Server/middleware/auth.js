let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Admin = require('../models/admin');
const Permissions = require('../models/permissions');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];



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
    scope: ['read:user', 'user:email', "user:follow"],
    successFlash: 'Welcome!',
});

const githubCallbackAuthenticateMiddleware = passport.authenticate('github', {
    failureRedirect: 'auth/failed',
    successFlash: 'Welcome dev!',

});

module.exports = {
    authenticateMiddleware,
    googleCallbackAuthenticateMiddleware,
    googleAuthenticateMiddleware,
    githubAuthenticateMiddleware,
    githubCallbackAuthenticateMiddleware,
    isAuthenticated(req, res, next) {
        try { 
                passport.authenticate("authenticate", {
                    session: true
                }, (err, user) => {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    if (!user) throw err
                    console.log(req.body)
                    console.log(req.files)
                    req.user = user; 
                    const sessionExpiresAt = req.session.cookie.expires;
                    if (sessionExpiresAt && new Date() > sessionExpiresAt) {
                        req.logout((err) => {
                            if (err) {
                                console.log(err);
                            }
                        })// Log out the user
                        res.setHeader("isAuthenticated", false)
                        return res.status(401).json({ isAuthenticated: false, message: 'Session expired' });
                    } else {
                        req.session.cookie.expires = new Date(Date.now() + 3600000);
                    }
        
                    res.setHeader("isAuthenticated", true)
                    res.setHeader("userId", req.user.id)
                    res.setHeader("sessionExpiresAt", sessionExpiresAt)
                    return next();
                })(req, res, next);
            } catch (err) {
            res.isAuthenticated = false;
            res.status(401).json({
                status: 'fail',
                message: 'Unauthorized access'
            })
        }       
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
                const permissionId = permission ? new mongoose.Types.ObjectId(permission._id) : null;
                if (!permissionId) { 
                    throw new Error('Permission not found')
                }
                const admin = await Admin.findOne({ user_id: req.user?._id, permissions: { $in: [permissionId] } });

                if (!admin || !admin.isActive) {
                    return res.status(401).json({
                        status: 'fail',
                        message: 'You do not have permission to access this resource'
                    })
                }
                
                next();
            } catch (err) {
                console.log(err)
                return res.status(401).json({
                    status: 'fail',
                    message: 'You do not have permission to access this resource'
                })
            }
        };
    }

};