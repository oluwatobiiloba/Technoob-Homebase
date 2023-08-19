const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const Schema = mongoose.Schema;
const User = require('./user');

const resources = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name of the resource'],
        unique: [true, 'This permission name is already taken'],
        trim: true
    },
    version: {
        type: Number,
        trim: true
    },
    stack: {
        type: String,
        required: [true, 'Please provide the applicable stack'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide description of the resouce'],
        trim: true
    },
    type: {
        type: String,
        default: true,
        trim: true,
        enum: ['api','design','props', 'database', 'storage', 'e-book', 'video', 'blog', 'repo', 'documentation','audio' , 'projects','other']

    },

    file: {
        type: String,
        trim: true
    },

    url: {
        type: String,
        trim: true
    },

    uploader_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        trim: true
    },

    image_placeholder: {
        type: String,
        trim: true,
        default: 'https://res.cloudinary.com/dx0hz2ziy/image/upload/v1595513899/placeholder.png'
    },

    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
        default: null
    },

    meta: {
        type: Object,
        default: {}
    },

    ratings: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user id']
        },
        rating: {
            type: Number,
            required: [true, 'Please provide rating'],
            min: 1,
            max: 5
        }
    }],
    averageRating: {
        type: Number,
        default: null
    },

    users: {
        type: Object,
        default: []
    },

    downloads: {
        type: Number,
        default: 0,
        min:0 
    },

    traffic: {
        type: Number,
        default: 0,
        min: 0
    }


},{
    timestamps: true
})

resources.pre('save', async function (next) {
    const user = await User.findById({_id: this.uploader_id});
    if (!user) {
        this.uploader_id = null;
    }
    this.meta = {
        uploader: {
            id: user._id,
            name: user.firstname + ' ' + user.lastname,
            username: user.username,
            stack: user.stack
        }
    }
    next();
});
resources.pre('save', function(next) {
    const ratings = this.ratings;
    const totalRatings = ratings.length;
    let sum = 0;
    for (let i = 0; i < totalRatings; i++) {
        sum += ratings[i].rating;
    }
    this.averageRating = totalRatings > 0 ? sum / totalRatings : null;
    next();
});

resources.pre('findOneAndUpdate', function(next) {
    const ratings = this.getUpdate().$push.ratings;
    const totalRatings = ratings.length;
    let sum = 0;
    for (let i = 0; i < totalRatings; i++) {
        sum += ratings[i].rating;
    }
    this.getUpdate().$set = { averageRating: totalRatings > 0 ? sum / totalRatings : null };
    next();
});
resources.pre('findOneAndUpdate', function (next) { 
    this.updatedAt = Date.now();
    next();
});



module.exports = mongoose.model('Resources', resources);