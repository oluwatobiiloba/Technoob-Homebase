const templates = require('../models/email_templates');
const { uuid } = require('uuidv4');

module.exports = {
    async saveMailTemplate(data) {
        return await templates.create({
            name: data.name,
            template: data.template,
            id: uuid()
        })
    }
}