const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const events = new Schema({
    theme: {
        type: String,
        required: [true, 'Please provide the theme of the event'],
    },
    location: {
        type: String,
        required: [true, 'Please provide the location of the event'],
    },

    ticketing: {
        type: String,
        enum: ["free", "paid", "volunteer"],
        required: [true, 'Please provide the ticketing type of the event'],
    },

    price: {
        type: String,
        min: "0.00"
    },

    currency: {
        type: String
    },

    date: {
        type: Date,
        required: true
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


});

events.pre("save", (next) => {
    if (this.ticketing === "paid" && !this.price || !this.currency) {
        throw new Error("Specify the price/currency for a paid event")
    }
    next()
})

module.exports = mongoose.model('Events', events);