// const multer = require("multer");
// const path = require("path");
// // Multer config
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
  params: {
        folder: 'ecommerce', // Change this to your desired folder name
        format: async (req, file) => 'png jpeg jpg ', // You can change the format based on your requirements
        public_id: (req, file) => '',
      },
});

const multerUpload = multer({ storage: storage });

module.exports = multerUpload;

