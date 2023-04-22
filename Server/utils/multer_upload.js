
const multer = require('multer');
const sharp = require('sharp');
const blob = require('../utils/azure_blob_helper');



const uploadParams = {
    limits: {
        fileSize: 8 * 1024 * 1024, // 8 MB file size limit for all file types except zip
    },
    fileFilter: (file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'text/csv', 'text/css', 'audio/mpeg', 'video/mp4', 'application/vnd.ms-powerpoint', 'application/vnd.rar'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type, only PDF, DOC, CSV, CSS, MP3, MP4, PPT, RAR, JPEG, and PNG files are allowed'));
        }
        cb(null, true);
    },
};



module.exports = {
    async uploadFile(file) {
        const upload = multer(uploadParams).single('file');
        let uploadResponse = null
        // Use Multer to extract the uploaded file from the request
        return new Promise((resolve, reject) => {
            upload({ file }, {}, async (err) => {
                if (err) {
                    console.error(err);
                    return reject(err.message);
                }

                const timestamp = new Date().toISOString().replace(/:/g, '-');
                const fileName = `${timestamp}-${file.originalname}`;


                if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                    const resizedImage = await sharp(file.buffer).resize(800).jpeg({ quality: 80 }).toBuffer();
                    uploadResponse = await blob.upload('images', resizedImage, fileName);
                } else {
                    const sizeLimit = file.mimetype === 'application/zip' ? 15 * 1024 * 1024 : 8 * 1024 * 1024;
                    if (file.size > sizeLimit) {
                        return reject(`File size exceeds limit of ${sizeLimit / 1024 / 1024} MB`);
                    }
                    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
                    uploadResponse = await blockBlobClient.upload(file.buffer, file.buffer.length);
                }

                let response = {
                    name: fileName,
                    url: uploadResponse.url,
                    requestId: uploadResponse.requestId,
                    message: `File was uploaded successfully.`

                }
                // Return a response indicating that the upload was successful
                resolve(response);
            });
        });
    },
};
