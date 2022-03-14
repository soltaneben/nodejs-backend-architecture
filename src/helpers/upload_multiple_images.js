const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'assets');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + (new Date().getTime() / 1000) + path.extname(file.originalname));
    }
});

 let uploadImage = multer({ storage }).array("files", 10);

 module.exports = uploadImage