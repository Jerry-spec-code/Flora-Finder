const multer = require('multer');

const destPath = 'uploads/';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, destPath); // set the destination folder for the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use the original file name for the uploaded file
    },
});
  
const upload = multer({ storage: storage });

module.exports = {
    upload,
    destPath,
}