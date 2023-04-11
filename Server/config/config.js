
require('dotenv').config();
const OS = require('os');

module.exports = {
    development: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: process.env.PORT || 3000,
        SALT_ROUNDS: process.env.SALT_ROUNDS || 12,
        TOKEN_EXPIRATION_TIME: process.env.TOKEN_EXPIRATION_TIME || '10m',
        SESSION_SECRET: process.env.SESSION_SECRET || 'technoob',
        HOST: OS.hostname(),
        IP: OS.networkInterfaces().en0[1].address,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
    },
    test: {
        NODE_ENV: "test"
    },

    production: {
        NODE_ENV: "production",

    },
};

