const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;

const admin = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        unique: [true, 'This user id is already taken'],
        trim: true
    },
    role: {
        type: String,
        required: [true, 'Please provide role'],
        trim: true
    },
    permissions: {
        type: Array,
        required: [true, 'Please provide permissions'],
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true,
        trim: true
    },
})

module.exports = mongoose.model('Admin', admin);