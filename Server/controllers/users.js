const services = require("../services/index")
const users = services.user

module.exports = {
    async dashboard(req, res) {
        console.log(req.user)
        console.log(req.body)
        try {
            const flashMessage = req.flash('success');
            return res.status(201).json({
                status: "success",
                message: flashMessage,

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
}