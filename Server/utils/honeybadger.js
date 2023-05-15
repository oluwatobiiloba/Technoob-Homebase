const env = process.env.NODE_ENV || 'development';
const config = require(`../config/config`)[env];

module.exports = require('@honeybadger-io/js').configure({
    apiKey: config.HONEYBADGER_KEY,
    environment: "production"
});