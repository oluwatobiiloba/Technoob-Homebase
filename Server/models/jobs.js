const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobs = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide the title of the job posting'],
    },
    company: {
        type: String,
        required: [true, 'Please provide the company'],
    },

    exp: {
        type: String,
        required: [true, 'Please provide the experience required'],
    },

    location: {
        type: String,
        required: [true, 'Please provide the location'],
    },

    workplaceType: {
        type: String,
        enum: ["onsite", "remote", "hybrid"],
        required: [true, 'Please provide the location'],
    },

    datePosted: {
        type: Date,
        required: true,
        default: Date.now() - 1000
    },

    expiryDate: {
        type: Date,
        required: [true, 'Please provide the expiry date'],
    },

    link: {
        type: String,
        required: true
    },

    poster: {
        type: String
    },

    comments: {
        type: Object,
        default: []
    },
    uploader_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        trim: true
    },

    views: {
        type: Number,
        default: 0
    }

});


module.exports = mongoose.model('Jobs', jobs);