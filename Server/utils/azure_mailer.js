const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const { EmailClient } = require("@azure/communication-email");
const templates = require('../models/email_templates');


const connectionString = config.COMMUNICATION_SERVICES_CONNECTION_STRING;


// const catch429Policy = {
//     name: "catch429Policy",
//     async sendRequest(request, next) {
//         const response = await next(request);
//         if (response.status === 429) {
//             throw new Error(response);
//         }
//         return response;
//     }
// };

// const clientOptions = {
//     additionalPolicies: [
//         {
//             policy: catch429Policy,
//             position: "perRetry"
//         }
//     ]
// }

const emailClient = new EmailClient(connectionString);


module.exports = {
    async sendEmail(options) {
        try {
            console.log(options)
            // 1) retrieve email template from database
            const template = await templates.findOne({ name: options.template_id });

            let content = template.template.toString();
            Object.keys(options.constants).forEach((key) => {
                content = content.split(`\${${key}}`).join(options.constants[key]);
            });
            const mailOptions = {
                senderAddress: "Stacklite_Admin@2befcba4-7986-41ed-920a-5185024b5538.azurecomm.net",
                content: {
                    subject: options.subject,
                    html: content,
                },
                recipients: {
                    to: [
                        {
                            address: options.email,
                            displayName: options.username,
                        },
                    ],
                },
                cc: options.cc,
                bcc: options.bcc,
                attachments: options.attachments?.map((attachment) => ({
                    name: attachment.name,
                    contentType: attachment.contentType,
                    contentUrl: attachment.url,
                    content: { disposition: 'attachment' },
                })),
            };

            const poller = await emailClient.beginSend(mailOptions);
            const response = await poller.pollUntilDone();
            if (response) {
                console.log(`Email sent to ${options.email}: ${response.id}`)
            }
            return response
        } catch (e) {
            console.log(e);
        }
        return null
    },
    async sendToMany(options) {
        try {
            // 1) retrieve email template from database
            const template = await mail_templates.findOne({ name: options.template });

            let content = template.html_content.toString();
            Object.keys(options.constants).forEach((key) => {
                content = content.split(`\${${key}}`).join(options.constants[key]);
            });
            const mailOptions = {
                senderAddress: "Stacklite_Admin@2befcba4-7986-41ed-920a-5185024b5538.azurecomm.net",
                content: {
                    subject: options.subject,
                    html: content,
                },
                recipients: {
                    to: options.emails,
                },
                cc: options.cc,
                bcc: options.bcc,
                attachments: attachments.map((attachment) => ({
                    name: attachment.name,
                    contentType: attachment.contentType,
                    contentUrl: attachment.url,
                    content: { disposition: 'attachment' },
                })),
            };
            const poller = await emailClient.beginSend(mailOptions);
            const response = await poller.pollUntilDone();
            if (response) {
                console.log(`Email sent to ${options.email}: ${response.id}`)
            }
            return response
        } catch (e) {
            console.log(e);
        }
        return null
    }
}