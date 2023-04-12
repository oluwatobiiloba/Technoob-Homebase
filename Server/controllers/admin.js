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
            return res.status(500).json(err)
        }
    },
}