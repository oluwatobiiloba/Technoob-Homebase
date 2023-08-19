const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;
const User = require('./user');
const { required } = require('joi');

const frontend_resources = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name of the resource'],
        unique: [true, 'This permission name is already taken'],
        trim: true
    },

    description: {
        type: String,
        required: [true, 'Please provide description of the resouce'],
        trim: true
    },

    url: {
        type: String,
        trim: true,
        required: [true, 'Please provide link to this resouce'],
    },
},{
    timestamps: true
});

module.exports = mongoose.model('frontend_resources', frontend_resources);