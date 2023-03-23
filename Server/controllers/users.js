const services = require("../services/index")
const users = services.user

module.exports = {
    async getAllUsers(_req, res) {

        try {
            const user = await users.findall()
            return res.status(201).json({
                status: "success",
                message: `${user.length} Users found`,

            })
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
}