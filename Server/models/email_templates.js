const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const email = new Schema({
    template: {
        type: String,
        required: [true, 'Please provide html template'],
    },
    name: {
        type: String,
        required: [true, 'Please provide name of the template'],
        unique: [true, 'This template name is already taken'],
        trim: true
    },
    id: {
        type: String,
        required: [true, 'Please provide id of the template'],
        unique: [true, 'This template id is already taken'],
        trim: true
    },
});


module.exports = mongoose.model('Email', email);