const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;



const mailing_list = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
        unique: true
    },

});



module.exports = mongoose.model('Mailing_list', mailing_list);
