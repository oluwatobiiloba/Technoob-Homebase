const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

const mongoose = require('mongoose');
mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
module.exports = database;