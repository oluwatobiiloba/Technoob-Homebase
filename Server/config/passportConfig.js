const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const GithubStrategy = require('passport-github2').Strategy;

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        async (username, password, done) => {
            try {

                const user = await User.findOne({ username }).select('+password');
                if (!user) return done(null, false, { message: 'Incorrect email or password.' });
                const isMatch = await user.comparePassword(password);
                if (!isMatch) return done(null, false, { message: 'Incorrect email or password.' });
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        },
    ),
);



passport.use(
    new GoogleStrategy(
        {
            clientID: config.GOOGLE_CLIENT_ID,
            clientSecret: config.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://127.0.0.1:3000/authenticate/oauth2/google/callback',
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
            callbackURL: 'http://127.0.0.1:3000/authenticate/oauth2/github/callback',
            passReqToCallback: true // Set passReqToCallback to true
        },
        async (req, accessToken, refreshToken, profile, cb) => {
            try {
                let user = await User.findOne({ github_id: profile.id });
                if (user) {
                    return cb(null, user);
                }

                if (!profile._json.email) {
                    // If email is not included in Github profile, send form to user to request email
                    req.session.github_profile = profile;
                    return cb(null, false, { profile: profile });
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
