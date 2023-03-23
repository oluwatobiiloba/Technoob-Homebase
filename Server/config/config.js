
require('dotenv').config();
const OS = require('os');

module.exports = {
    development: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: process.env.PORT,
    },
    test: {
        NODE_ENV: "test"
    },

    production: {
        NODE_ENV: "production",

    },
};

