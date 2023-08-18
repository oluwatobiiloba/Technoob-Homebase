const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();


/**
 * @function multerFilter
 * @param {object} req
 * @param {object} file
 * @param {function} callback
 * @returns {object} 
 */
const multerFilter = (req, file, callback) => {
    
    const type = file.mimetype.split('/')[0];
    if (type === "image") {
        callback(null, true)
    } else {
        const error = new Error ("Invalid File Type")
        callback(error, false)
    }
}

const uploadParams = {
    limits: {
        fileSize: 8 * 1024 * 1024, // 8 MB file size limit for all file types except zip
    },
    fileFilter: (req, file, callback) => {
        const allowedTypes = ['application/pdf', 'application/msword', 'text/csv', 'text/css', 'audio/mpeg', 'video/mp4', 'application/vnd.ms-powerpoint', 'application/vnd.rar', 'application/zip', "application/json","application/html", "application/javascript","text/plain", "audio/mp4", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/ogg", "video/webm" ];
        if (!allowedTypes.includes(file.mimetype)) {
            return callback(new Error(`${file.mimetype} is not allowed. Only PDF, DOC, CSV, CSS, MP3, MP4, PPT,and RAR files are allowed`));
        }
        callback(null, true);
    },
    storage: inMemoryStorage
};

    module.exports = {
        image: (req, res, next) => {
        multer({ storage: inMemoryStorage, fileFilter: multerFilter }).single('image')(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // handle multer errors
                res.status(400).json({
                    Status: "Failed",
                    Name: "Invalid File Type",
                    Message: err.message
                });
            } else if (err) {
                // handle custom errors
                res.status(400).json({
                    Status: "Failed",
                    Name: "Invalid File Type",
                    Message: err.message
                });
            } else {
                next();
            }
        });
            },
        file: (req, res, next) => { 
            multer(uploadParams).single('file')(req, res, (err) => {
                
                if (err instanceof multer.MulterError) {
                    // handle multer errors
                    res.status(400).json({
                        Status: "Failed",
                        Name: "Invalid File Type",
                        Message: err.message
                    });
                } else if (err) {
                    // handle custom errors
                    res.status(500).json({
                        Status: "Failed",
                        Name: "Invalid File Type",
                        Message: err.message
                    });
                } else {
                    next();
                }
            });
        }
    
    }
