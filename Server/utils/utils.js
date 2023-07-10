
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = config.SALT_ROUNDS




module.exports = {
     async hashPassword(password) {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        return bcrypt.hash(password, salt);;
    }
}