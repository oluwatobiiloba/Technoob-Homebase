const joi = require('joi');

module.exports = {
    register: joi.object({
        username: joi.string().min(3).max(30).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: joi.string().min(8).max(30).required(),
        passwordConfirm: joi.ref('password'),
        firstname: joi.string().min(3).max(30).required(),
        lastname: joi.string().min(3).max(30).required(),
        stack: joi.array().items(joi.string().min(3).max(30).required()).required()


    }),
    login: joi.object({
        username: joi.string().min(3).max(30).required(),
        password: joi.string().min(8).max(30).required()
    }),
}

