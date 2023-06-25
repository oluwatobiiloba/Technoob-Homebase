const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        unique: [true, 'This user id is already taken'],
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
    }
});



module.exports = mongoose.model('Activity', activity);
