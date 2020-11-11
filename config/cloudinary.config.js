const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
//need these three libraries together
//v1 is deprecated, so we're using v2 of cloudinary

// Please add your details here
cloudinary.config({
  cloud_name: 'sandram',
  api_key: '299185973918787',
  api_secret: 'cpXxTGfK0GmJKx2m3rSjndsWh3c'
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'todo-gallery', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

module.exports = multer({ storage })