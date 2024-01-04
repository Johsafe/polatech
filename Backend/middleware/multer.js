// const multer = require("multer");
// const path = require("path");
// Multer config
// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type is not supported"), false);
//       return;
//     }
//     cb(null, true);
//   },
// });


// config/multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  // params: {
  //   folder: 'ecommerce', // Customize the folder where images will be stored
  //   format: async (req, file) => 'jpg', // Customize the image format if needed
  //   public_id: (req, file) => `${file.fieldname}-${Date.now()}`, // Generate a unique public_id
  // },
  folder: 'ecommerce', // Customize the folder where images will be stored
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: 'ecommerce', 
// });
const multerUpload = multer({ storage: storage });

module.exports = multerUpload;

