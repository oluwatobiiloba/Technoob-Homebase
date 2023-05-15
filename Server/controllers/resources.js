const services = require('../services/index');
const resource = services.resources;

module.exports = {
     async get_all (req, res) { 
        const query = req.query
        try {
            const resources = await resource.get_all(query)
            res.status(200).json({
                status: "success",
                message: `${resources.length} resource(s) retrieved`,
                data: resources
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async get(req, res, next) { 
        const id = req.params.id
        try {
            const resources = await resource.get(id)
            res.status(200).json({
                status: "success",
                message: `resource retrieved`,
                data: resources
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async create (req, res, next) { 
        const body = req.body
        if (!body.uploader_id) {
            body.uploader_id = req.user?._id || '643492bb86360e05476576f9'
        }
        try {
            const resources = await resource.create(body)
            res.status(200).json({
                status: "success",
                message: `resource created`,
                data: resources
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async count(req, res, next) {
        try {
            const count = await resource.count()
            res.status(200).json({
                status: "success",
                message: `resource count`,
                data: count
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async remove(req, res, next) {
        const id = req.params.id
        try {
            const resources = await resource.remove(id)
            res.status(200).json({
                status: "success",
                message: `resource deleted`,
                data: resources
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async rate(req, res, next) {
        const id = req.params.id
        const rating = req.body
        if (!rating.user_id) {
            rating.user_id = req.user?._id || '643492bb86360e05476576f9'
        }
        try {
            const resources = await resource.rate(id, rating)
            res.status(200).json({
                status: "success",
                message: `resource rated`,
                data: resources
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    }
}