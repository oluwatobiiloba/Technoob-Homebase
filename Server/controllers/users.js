const services = require("../services/index")
const users = services.user

module.exports = {
    async dashboard(_req, res) {

        try {

            return res.status(201).json({
                status: "success",
                message: `Welcome to the dashboard`,

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
}