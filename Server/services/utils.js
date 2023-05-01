const uploader = require('../utils/multer_upload')

module.exports = {
    async upload_file(file) {   
        try {
            const upload = await uploader.uploadFile(file)
            return upload
        } catch (error) {
            throw error
        }
    }
}