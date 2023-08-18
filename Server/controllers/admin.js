const { admin } = require("../services/index")
const errorHandler = require("../utils/errorHandler");

module.exports = {
    async dashboard(req, res) {
        try {
            const adminDashboard = await admin.adminDashboard();
            
            return res.status(201).json({
                status: "success",
                message: `Dashboard details retrived successfully`,
                data: adminDashboard

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },
    async traffic(req, res) {
        const range = req.query
        try {
            const trafficData = await admin.traffic(range);
            
            return res.status(201).json({
                status: "success",
                message: `Traffic details retrieved successfully`,
                data: trafficData

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    },
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
           const filterError = errorHandler.filter(err);
            return res.status( filterError.status|| 500 ).json({
                status: "error",
                message: filterError.message
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
            return res.status(201).json({
                status: "success",
                message: `Added permission`,
                data: result
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

    async remove_permission(req, res) {
        const { email, permission } = req.body;
        try {
            const result = await admin.remove_permission(email, permission)
            return res.status(200).json({
                status: "Success",
                message: "Permission removed successfully",
                data: result
            })
        } catch (err) {
            return res.status(500).json({
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

    async getMailingList(req, res) { 
        try {
            const mailingList = await admin.getMailingList();
            return res.status(200).json({
                status: "success",
                message: `Retrieved mailing list`,
                data: mailingList
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

    async deleteMailingList(req, res) {
        try {
            const mailingList = await admin.deleteMailingList(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Deleted mailing list`,
                data: mailingList
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
    
    async getContactUs(req, res) {
        try {
            const contactUs = await admin.getContactUs();
            return res.status(200).json({
                status: "success",
                message: `Retrieved contact us`,
                data: contactUs
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

    async deleteContactUs(req, res) {
        try {
            const contactUs = await admin.deleteContactUs(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Deleted contact us`,
                data: contactUs
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

    async getContactUsMessage(req, res) {
        try {
            const contactUs = await admin.getContactUsMessage(req.params.id);
            return res.status(200).json({
                status: "success",
                message: `Retrieved contact us`,
                data: contactUs
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

    async createFrontendResource(req, res) {
        const { name, description, url } = req.body;
        try {
            const resource = await admin.createFrontendResource({ name, description, url });
            return res.status(201).json({
                status: "success",
                message: `Created frontend resource`,
                data: resource
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

    async getContributors(req, res) {
        try {
            const contributors = await admin.getContributors();
            return res.status(200).json({
                status: "success",
                message: `Retrieved Contributors`,
                data: contributors
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

    async addContributors(req, res) {
        const { first_name, last_name, designation, image } = req.body;
        try {
            const contributor = await admin.addContributors({ first_name, last_name, designation,image});
            return res.status(201).json({
                status: "success",
                message: `Added Contributor`,
                data: contributor
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