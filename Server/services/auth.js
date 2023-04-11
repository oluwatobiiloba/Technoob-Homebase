let User = require('../models/user');
const middleware = require('../middleware/index');
const crypto = require('crypto');




module.exports = {
    init: function () {

    },
    login(req, res) {
        middleware.auth.authenticateMiddleware(req, res);
    },

    async register(body) {
        try {
            const { email, password, firstname, username, lastname, stack, passwordConfirm } = body;
            const user = new User({ email, password, firstname, username, lastname, stack, passwordConfirm });
            await user.save();
            return user
        } catch (err) {
            throw err
        }
    },
    google(req, res) {
        return middleware.auth.googleAuthenticateMiddleware(req, res);
    },
    googleCallback(req, res, next) {
        return middleware.auth.googleCallbackAuthenticateMiddleware(req, res, next);
    },
    github(req, res) {
        return middleware.auth.githubAuthenticateMiddleware(req, res);
    },
    githubCallback(req, res, next) {
        return middleware.auth.githubCallbackAuthenticateMiddleware(req, res, next);
    },
    async githubEmail(email, profile, username, next) {
        try {
            let user = await User.findOne({ email });
            if (!user) {
                const temp_password = crypto.randomBytes(20).toString('hex');
                user = await User.create({
                    github_id: profile.id,
                    username: username,
                    lastname: username,
                    firstname: username,
                    email: email,
                    password: temp_password,
                    passwordConfirm: temp_password,
                    photo: profile.photos[0].value,
                    github_meta: profile,
                });
            }
            return user;

        } catch (err) {
            throw err
        }
    }

}