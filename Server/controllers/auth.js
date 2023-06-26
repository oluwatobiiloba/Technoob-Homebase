
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/config`)[env];
const User = require("../models/contact_us");
const passport = require('passport');
const services = require('../services/index');
const auth = services.auth;
const crypto = require('crypto');
const baseurl = config.LIVE_BASE_URL;
const validator = require('../utils/joi_validator');

module.exports = {
    async login(req, res, next) {
        try {
            await validator.login.validateAsync(req.body);
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.status(401).json({
                        status: 'fail',
                        message: info.message
                    })
                }
                // return  res.status(200).json({
                //     status: 'success',
                //     message: `Logged in ${user.username}`,
                //     data: {
                //         user
                //     }
                // })
                if (user) {
                    req.login(user, (err) => {
                        if (err) {
                            return next(err);
                        }
                        res.setHeader("isAuthenticated", true)
                        res.setHeader("userId", user._id)
                        res.setHeader("sessionExpiresAt",req.session.cookie.expires)
    
                        res.status(200).json({
                            status: 'success',
                            message: `Logged in ${user.username}`,
                            data: {
                                user
                            }
                        })
                    });
                }
                
            })(req, res, next);
        } catch (err) { 
            next(err);

        }

       
    },

    async register(req, res, next) {
        try {
            await validator.register.validateAsync(req.body);
            
            await auth.register(req.body);
            req.body = {
                username: req.body.username,
                password: req.body.password
            }
            this.login(req, res, next);
        } catch (err) {
            console.log(err);
            next(err);
        }
    },

    logout(req, res) {
        req.logout((err) => {
            if (err) {
                console.log(err);
            }
            res.setHeader("isAuthenticated", false)
        });
        res.status(200).json({
            status: 'success',
            message: 'Logged out'
        })
    },

    async verifyEmail(req, res) {
        const token = req.query.token
        try {
            const user = await auth.verifyUserEmail(token)
            if(!user) throw new Error("An error occured")
            return  res.status(200).json({
                status: 'success',
                message: `Verified ${user.username}`,
            })
        } catch (err) {
            return res.status(500).json({
                status: 'Failed',
                message: "User verification failed, please contact admin",
            })
            
        }
    },

    async forgotPasswordEmail(req,res) {
        const { email } = req.body
        try {
            const reset = await auth.forgotPasswordEmail(email)
            if(!reset) throw new Error("An error occured")
            return  res.status(200).json({
                status: 'success',
                message: `Email Sent`,
            })
        } catch (err) {
            return res.status(500).json({
                status: 'Failed',
                message: "User password reset failed, please contact admin",
            })
        }
    },

    async reset_password(req, res) {
        const { password, passwordConfirm } = req.body
        const token = req.query.token
        try {
            const reset = await auth.resetPassword(token, password, passwordConfirm)
            if (!reset) throw new Error("An error occured")
            return  res.status(200).json({
                status: 'success',
                message: `Password reset successful`,
            })
        } catch (err) {
            return res.status(500).json({
                status: 'Failed',
                message: "User password reset failed, please contact admin",
            })
        }
    },

    googlelogin(req, res) {
        return auth.google(req, res);
    },

    googleCallback(req, res, next) {
        return auth.googleCallback(req, res, next);
    },

    githublogin(req, res) {
        return auth.github(req, res);
    },

    githubCallback(req, res, next) {
        return auth.githubCallback(req, res, next);
    },

    async githubEmail(req, res, next) {

        const { email, githubUsername, githubId, githubPhoto, githubMeta, firstName, lastName } = req.body;

        try {
            const temp_password = crypto.randomBytes(20).toString('hex');

            const user = await User.create({
                github_id: githubId,
                username: githubUsername,
                email: email,
                password: temp_password,
                passwordConfirm: temp_password,
                photo: githubPhoto,
                github_meta: githubMeta,
                lastname: firstName,
                firstname: lastName,
            });


            req.login(user, (err) => {
                if (err) {
                    console.log(err);
                }
                res.redirect('/api/v1/user/dashboard');
            });

        } catch (err) {
            next(err);
        }

    },

    renderEmail(req, res, next) {
        try {
            const profile = req.session.github_profile;
            res.render('email-form.jade', { profile: profile, title: "Github Email" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports.register = module.exports.register.bind(module.exports);