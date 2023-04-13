
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/config`)[env];
const User = require("../models/user");
const passport = require('passport');
const services = require('../services/index');
const auth = services.auth;
const crypto = require('crypto');
const baseurl = config.LIVE_BASE_URL;


module.exports = {
    login(req, res, next) {
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
            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                res.status(200).json({
                    status: 'success',
                    message: `Logged in ${user.username}`,
                    data: {
                        user
                    }
                })
            });
        })(req, res, next);
    },

    async register(req, res, next) {
        try {
            const user = await auth.register(req.body);
            this.login(req, res, next);
        } catch (err) {
            next(err);
        }
    },

    logout(req, res) {
        req.logout((err) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'Logged out'
        })
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