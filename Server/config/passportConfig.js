const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const GithubStrategy = require('passport-github2').Strategy;
const mailer = require('../utils/azure_mailer')

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        async (username, password, done) => {
            try {
                let user = await User.findOne({ username }).select('+password').select('+active');
                if (!user) return done(null, false, { message: 'Incorrect email or password.' });
                const isMatch = await user.comparePassword(password);
                if (!isMatch) return done(null, false, { message: 'Incorrect email or password.' });

                user = {
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    email: user.email,
                    stack: user.stack,
                    photo: user.photo,
                    active: user.active,
                    role: user.role,
                    verified: user.verified
                }
                return done(null, user);
            } catch (err) {
                throw err;
            }
        },
    ),
);



passport.use(
    new GoogleStrategy(
        {
            clientID: config.GOOGLE_CLIENT_ID,
            clientSecret: config.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://127.0.0.1:3000/api/v1/authenticate/oauth2/google/callback',
        },
        async (accessToken, refreshToken, profile, cb) => {

            try {
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    const temp_password = crypto.randomBytes(20).toString('hex');
                    user = await User.create({
                        google_id: profile.id,
                        username: `${profile.name.givenName}_${profile.name.familyName}`,
                        lastname: profile.name.familyName,
                        firstname: profile.name.givenName,
                        email: profile.emails[0].value,
                        password: temp_password,
                        passwordConfirm: temp_password,
                        name: profile.displayName,
                        verified: true,
                        photo: profile.photos[0].value
                    });

                    if (user) {
                        
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
                        await mailer.sendEmail(mailOptions)
                    } catch (err) {
                        console.log(err)
                    }
                    }
                    return cb(null, user);
                }
                return cb(null, profile);
            } catch (err) {
                return cb(err);

            }


        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: config.GITHUB_CLIENT_ID,
            clientSecret: config.GITHUB_CLIENT_SECRET,
            callbackURL: 'http://127.0.0.1:3000/api/v1/authenticate/oauth2/github/callback',
            passReqToCallback: true // Set passReqToCallback to true
        },
        async (req, accessToken, refreshToken, profile, cb) => {
            try {
                req.session.github_access_token = accessToken;
                req.session.github_refresh_token = refreshToken;
                let user = await User.findOne({ github_id: profile.id });
                if (user) {
                    return cb(null, user);
                }

                if (!profile._json.email) {
                    // If email is not included in Github profile, send form to user to request email
                    req.session.github_profile = profile;
                    return cb(null, false, { profile: profile });
                }

                if (req.user) {
                    const id = req.user._id;
                    //update user profile instead of creating a new one
                    user = await User.findByIdAndUpdate({ _id: id },{
                        github_id: profile.id,
                        github_meta: profile
                    })
                    return cb(null, user);
                }

                const temp_password = crypto.randomBytes(20).toString('hex');

                user = await User.create({
                    github_id: profile.id,
                    username: profile.username,
                    email: profile._json.email,
                    password: temp_password,
                    passwordConfirm: temp_password,
                    photo: profile.photos[0].value,
                    github_meta: profile,
                    lastname: profile.username,
                    firstname: profile.username,
                });


                return cb(null, user);
            } catch (err) {
                return cb(err);
            }
        }
    )
);




passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});
