const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('../models/user');
const middleware = require('../middleware/index');
const crypto = require('crypto');
const mailer = require('../utils/azure_mailer')
const jwt = require('jsonwebtoken');
const queue = require('../azure_Queue/init');


module.exports = {
    signToken(id,token=null) {
        const signedToken = jwt.sign({ id ,token}, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRES });
        return signedToken;
    },
    generateToken(length = 32) {
        return crypto.randomBytes(length).toString('hex');
    },

    async verifyUserEmail(token) {
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            const user = await User.findById(decoded.id);
            if (!user) {
                return false
            }
            user.verified = true;
            await user.save();
            return true
        } catch (err) {
            throw err
        }
    },
    async forgotPasswordEmail(email) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return false
            }
            const token = await this.generateToken(32)
            const resetToken = this.signToken(user._id,token);
            user.passwordResetToken = token;
            await user.save();
            const constants = {
                username: user.username,
                reset_link: `${config.LIVE_BASE_URL}/api/v1/users/reset-password?token=${resetToken}`
            }
            const mailOptions = {
                email: user.email,
                subject: 'You requested a password reset',
                constants,
                template_id: "Reset Password",
                username: user.username
            }

            await queue.sendMessage({
                name: "SingleEmail",
                import: "../utils/azure_mailer",
                service: "mailer",
                method: "sendEmail",
                data: mailOptions
            })

            //await mailer.sendEmail(mailOptions)
            return true
        } catch (error) {
            console.log(error)
            throw error
        }

    },

    async resetPassword(token, password, passwordConfirm) {
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            if (!decoded) {
                return false
            }
            const user = await User.findById(decoded.id);
            if (!user) {
                return false
            }
            
            user.password = password;
            user.passwordConfirm = passwordConfirm;
            user.passwordResetToken = null;
            await user.save();
            return true
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async updatePassword(id, password, passwordConfirm, previousPassword) {
        try {
            const user = await User.findById(id);
            const isMatch = await user.comparePassword(previousPassword);
            if (!isMatch) {
                return false
            }
            user.password = password;
            user.passwordConfirm = passwordConfirm;
            await user.save();
            const constants = {
                username: user.username,
            }
            const mailOptions = {
                email: user.email,
                subject: 'Your password has been changed',
                constants,
                template_id: "Password Changed",
                username: user.username
            }
            await queue.sendMessage({
                name: "SingleEmail",
                import: "../utils/azure_mailer",
                service: "mailer",
                method: "sendEmail",
                data: mailOptions
            })

            //await mailer.sendEmail(mailOptions)
            return true
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async register(body) {
        try {
            const { email, password, firstname, username, lastname, stack, passwordConfirm } = body;
            const user = new User({ email, password, firstname, username, lastname, stack, passwordConfirm });
            await user.save();

            const token = this.signToken(user._id)

            try {
                const constants = {
                    username: user.username,
                    verification_link: `${config.LIVE_BASE_URL}/api/v1/users/verify-email?token=${token}`
                }

                const mailOptions = {
                    email: user.email,
                    subject: 'Welcome to TechNoob!',
                    constants,
                    template_id: "6435a97404c5b38f7ba81a35",
                    username: user.username

                }

                await queue.sendMessage({
                    name: "SingleEmail",
                    import: "../utils/azure_mailer",
                    service: "mailer",
                    method: "sendEmail",
                    data: mailOptions
                })
                //await mailer.sendEmail(mailOptions)
            } catch (err) {
                console.log(err)
            }


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

            try {
                const constants = {
                    username: user.username,
                    verification_link: `${config.LIVE_BASE_URL}/api/v1/users/verify-email?token=${user.email}`,
                    password: temp_password
                }

                const mailOptions = {
                    email: user.email,
                    subject: 'Welcome to TechNoob!',
                    constants,
                    template_id: "6435a97404c5b38f7ba81a35",
                    username: user.username

                }
                await queue.sendMessage({
                    name: "SingleEmail",
                    import: "../utils/azure_mailer",
                    service: "mailer",
                    method: "sendEmail",
                    data: mailOptions
                })
    
                //await mailer.sendEmail(mailOptions)
            } catch (err) {
                console.log(err)
            }

            return user;

        } catch (err) {
            throw err
        }
    }

}