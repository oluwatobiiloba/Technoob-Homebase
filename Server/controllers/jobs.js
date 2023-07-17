const services = require('../services/index');
const jobs = services.jobs;

module.exports = {
     async get_all (req, res) { 
        const query = req.query
        try {
            const job = await jobs.get_all(query)
            res.status(200).json({
                status: "success",
                message: `${job.length} Job(s) retrieved`,
                data: job
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
        const user = req.user?._id || 0
        try {
            const job = await jobs.get(id,user)
            res.status(200).json({
                status: "success",
                message: `Job retrieved`,
                data: job
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async getMetrics(req, res, next) { 
        try {
            const jobsMetrics = await jobs.getMetrics()
            res.status(200).json({
                status: "success",
                message: `Job metrics retrieved`,
                data: jobsMetrics
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
            const job = await jobs.create(body)
            res.status(200).json({
                status: "success",
                message: `Job created`,
                data: job
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
            const count = await jobs.count()
            res.status(200).json({
                status: "success",
                message: `job count`,
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
            await jobs.remove(id)
            res.status(200).json({
                status: "success",
                message: `Job deleted`
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    },

    async getActivity(req, res, next) {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        try {
            const activity = await jobs.activity(page,limit)
            res.status(200).json({
                status: "success",
                data: activity
            })
        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err.message
            })
        }
    },

}