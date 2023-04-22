const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;



const contact_us = new Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
        trim: true,
        maxlength: [40, 'A user name must have less or equal then 40 characters']

    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Please provide your Message'],
        trim: true

    }

});



module.exports = mongoose.model('Contact_us', contact_us);
