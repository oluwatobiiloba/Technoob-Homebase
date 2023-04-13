const Templates = require('../models/email_templates');
const uuid = require('uuid');
const Admin = require('../models/admin');
const Permissions = require('../models/permissions');
const User = require('../models/user');
const mailer = require('../utils/azure_mailer');

module.exports = {
    async saveMailTemplate(data) {
        return await Templates.create({
            name: data.name,
            template: data.template,
            id: uuid.v4()
        })
    },
    async inviteAdmin(email) {
        try {
            //check if user already exists
            const user = await User.findOneAndUpdate({ email }, { role: 'admin' }, { new: true });

            if (!user) {
                throw new Error('User not found')
            }

            let admin = await Admin.findOrCreate(user._id, 'admin', ['*'])
            let sendemail = admin.isActive ? false : true
            if (admin) {
                admin = await Admin.findOneAndUpdate({ user_id: user._id }, { isActive: true }, { new: true })
            }

            if (sendemail) {
                const constants = {
                    username: user.username
                }
                const mailOptions = {
                    email: user.email,
                    subject: 'You have been invited to be an admin',
                    constants,
                    template_id: "Admin Invite",
                    username: user.username
                }
                await mailer.sendEmail(mailOptions)

            }
            const response = {
                user: user,
                admin_profile: admin
            }

            return response
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async removeAdmin(email) {
        try {

            const user = await User.findOneAndUpdate({ email }, { role: 'user' }, { new: true })
            const isActive = await Admin.checkStatus(user._id)

            if (!isActive) {
                return {
                    user: user,
                    admin_profile: 'User is not an admin',

                }
            }
            const options = { new: true }
            const admin = await Admin.findOneAndUpdate({ user_id: user._id }, { isActive: false }, options)

            if (!user || !admin) {
                throw new Error('User not found/ User is not an admin')
            }


            const response = {
                user: user,
                admin_profile: admin
            }

            const constants = {
                username: user.name
            }
            const mailOptions = {
                email: email,
                subject: "Your admin access has been revoked",
                constants,
                template_id: "Admin Removed",
                username: user.username
            }
            await mailer.sendEmail(mailOptions)
            return response
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async create_permission(team, data) {
        try {
            const { name, description } = data;
            console.log(name, description)
            const permission = `${team}:${name.split(' ').join('')}`
            const newPermission = new Permissions({ name, permission, team, description });
            await newPermission.save();
            return newPermission
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async getMailTemplates() {
        try {
            const templates = await Templates.find();
            return templates
        }
        catch (err) {
            console.log(err)
            throw err
        }
    },
    async getMailTemplate(id) {
        try {
            const template = await Templates.findById(id);
            if (!template) {
                throw new Error('Template not found')
            }
            return template
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async getAdmins() {
        try {
            const admins = await Admin.find().populate('user_id').populate('permissions');
            return admins
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async getAdmin(id) {
        try {
            const admin = await Admin.findById(id).populate('user_id').populate('permissions');
            if (!admin) {
                throw new Error('Admin not found')
            }
            return admin

        } catch (err) {
            console.log(err)
            throw err
        }
    },
    async delete_permission(id) {
        try {
            const permission = await Permissions.findByIdAndRemove(id);
            if (!permission) {
                throw new Error('Permission not found')
            }
            const response = {
                message: 'Permission deleted successfully',
                permission
            }
            return response
        }
        catch (err) {
            console.log(err)
            throw err
        }
    },
    async deactivatePermission(id) {
        try {
            const permission = await Permissions.findByIdAndUpdate(id, { isActive: false }, { new: true });
            if (!permission) {
                throw new Error('Permission not found')
            }
            return permission
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async get_permissions() {
        try {
            const permissions = await Permissions.find();
            return permissions
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async get_permission(id) {
        try {
            const permission = await Permissions.findById(id);
            if (!permission) {
                return new Error('Permission not found')
            }
            return permission
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async add_permission(email, permission) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User not found')
            }
            console.log(user)
            const check_user_permission = await Admin.findOne({ user_id: user._id });
            if (!check_user_permission) {
                await Admin.create({ user_id: user._id, role: 'user', permissions: [] })
            }
            const check_permission = await Permissions.findOne({ permission });
            if (!check_permission) {
                throw new Error('Permission not found')
            }

            if (check_user_permission?.permissions?.includes(check_permission._id)) {
                throw new Error('User already has this permission / permission not found')
            }

            const admin = await Admin.findOne({ user_id: user._id });
            admin.permissions.push(check_permission._id);
            await admin.save();
            return admin

        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async sendNotificationEmail(content) {
        try {
            const emailObjects = await Promise.all(content.emails.map(async (email) => {
                const user = await User.findOne({ email: email });
                if (user) {
                    return { address: user.email, displayName: user.username };
                } else {
                    return null;
                }
            })).then(objects => objects.filter(obj => obj !== null));

            const constants = {
                message: content.message,
                username: null
            }

            const mailOptions = {
                emails: emailObjects,
                subject: content.subject,
                constants: constants,
                template_id: content.template_id
            }

            const mail_response = await mailer.sendToMany(mailOptions)
            return mail_response
        } catch (err) {
            console.log(err)
            throw err
        }
    },

    async sendNotificationEmailStatic(content) {
        try {
            const emailObjects = await Promise.all(content.emails.map(async (email) => {
                const user = await User.findOne({ email: email });
                if (user) {
                    return { address: user.email, displayName: user.username };
                } else {
                    return null;
                }
            })).then(objects => objects.filter(obj => obj !== null));

            const constants = {
                message: content.message,
                username: "Noobies"
            }

            const mailOptions = {
                to: [{ address: "technoobng@gmail.com", displayName: "Noobies" }],
                emails: emailObjects,
                subject: content.subject,
                constants: constants,
                template_id: content.template_id
            }

            const mail_response = await mailer.sendToManyStatic(mailOptions)
            return mail_response
        } catch (err) {
            console.log(err)
            throw err
        }
    }

}