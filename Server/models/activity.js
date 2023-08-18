const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        trim: true
    },
    module: {
        type: String,
        required: true,
        trim: true,
        enum: ['job','resource','event', 'quizzes']

    },
    activity: {
        type: Object,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});



module.exports = mongoose.model('Activity', activity);
