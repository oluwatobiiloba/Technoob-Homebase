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
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permissions'
    }],
    isActive: {
        type: Boolean,
        default: true,
        trim: true
    },
},{
    timestamps: true
});

// Define findOrCreate static method
admin.statics.findOrCreate = async function (user_id, role, permissions) {
    try {
        const admin = await this.findOne({ user_id });
        if (admin) {
            return admin;
        } else {
            return this.create({ user_id, role, permissions });
        }
    } catch (err) {
        throw new Error(`Error finding or creating admin: ${err}`);
    }
};

admin.statics.checkStatus = async function (user_id) {
    try {
        const admin = await this.findOne({ user_id });
        if (admin.isActive) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        throw new Error(`Error checking admin: ${err}`);
    }
};

module.exports = mongoose.model('Admin', admin);
