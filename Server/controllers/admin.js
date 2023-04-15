
const services = require("../services/index")
const admin = services.admin

module.exports = {
    async saveMailTemplate(req, res) {
        try {
            const email_response = await admin.saveMailTemplate(req.body);
            return res.status(201).json({
                status: "success",
                message: `Added email template to database`,
                data: email_response

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async inviteAdmin(req, res) {
        try {
            const admin_response = await admin.inviteAdmin(req.body.email);
            return res.status(201).json({
                status: "success",
                message: `Invited ${admin_response.user.username} to the platform`,
                data: admin_response
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async removeAdmin(req, res) {
        try {
            const admin_response = await admin.removeAdmin(req.body.email);
            return res.status(201).json({
                status: "success",
                message: `Removed ${admin_response.user.username} as an admin`,
                data: admin_response
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async getMailTemplates(req, res) {
        try {
            const templates = await admin.getMailTemplates();
            return res.status(200).json({
                status: "success",
                message: `Retrieved all email templates`,
                data: templates
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async getMailTemplate(req, res) {
        try {
            const template = await admin.getMailTemplate(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Retrieved email template`,
                data: template
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async getAdmins(req, res) {
        try {
            const admins_list = await admin.getAdmins();
            return res.status(200).json({
                status: "success",
                message: `Retrieved all admins`,
                data: admins_list
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async getAdmin(req, res) {
        try {
            const admin_info = await admin.getAdmin(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Retrieved ${admin_info.user_id.username}`,
                data: admin_info
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async create_permission(req, res) {
        const data = {
            name: req.body.name,
            description: req.body.description,
        }
        const { team } = req.body;
        try {
            const permission = await admin.create_permission(team, data);
            return res.status(201).json({
                status: "success",
                message: `Created permission`,
                data: permission
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async get_permissions(req, res) {
        try {
            const permissions = await admin.get_permissions();
            return res.status(200).json({
                status: "success",
                message: `Retrieved all permissions`,
                data: permissions
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },

    async get_permission(req, res) {
        try {
            const permission = await admin.get_permission(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Retrieved permission`,
                data: permission
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async delete_permission(req, res) {
        try {
            const permission = await admin.delete_permission(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Deleted permission`,
                data: permission
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async deactivatePermission(req, res) {
        try {
            const permission = await admin.deactivatePermission(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Deactivated permission`,
                data: permission
            })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async add_permission(req, res) {
        const { email, permission } = req.body;

        try {
            const result = await admin.add_permission(email, permission);
            return res.status(200).json({
                status: "success",
                message: `Added permission`,
                data: result
            })
        }
        catch (err) {

            return res.status(404).json({
                status: "error",
                message: err.message
            })
        }
    },

    async sendNotificationEmail(req, res) {
        const { emails, subject, message ,template_id } = req.body;
        const content = {
            subject: subject,
            message: message,
            emails: emails,
            template_id: template_id
        }

        try {
            const sender = await admin.sendNotificationEmail(content);
            return res.status(200).json({
                status: "success",
                message: `Sent email`,
                data: sender
            })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },

    async sendNotificationEmailStatic(req, res) {
        const { emails, subject, message,template_id } = req.body;
        const content = {
            subject: subject,
            message: message,
            emails: emails,
            template_id: template_id
        }

        try {
            const sender = await admin.sendNotificationEmailStatic(content);
            return res.status(200).json({
                status: "success",
                message: `Sent email`,
                data: sender
            })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },





}