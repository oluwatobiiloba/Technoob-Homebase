const services = require('../services/index');
const resource = services.utils;


module.exports = {
    async upload_file(req, res, next) {
        const file_uploaded = req.file
        try {
            const file = await resource.upload_file(file_uploaded)
            res.status(200).json({
                status: "success",
                message: `file uploaded`,
                data: file
            })
        } catch (error) {
            res.status(400).json({
                status: "fail",
                message: error.message
            })
        }
    }
}