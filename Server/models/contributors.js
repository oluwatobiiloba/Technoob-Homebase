const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributor = new Schema({
    first_name: {
        type: String,
        required: [true, 'Please provide first name'],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, 'Please provide last name'],
        trim: true
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'Please provide user image'],
    }
});



module.exports = mongoose.model('Contributors', contributor);
