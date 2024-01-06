
// config/multer.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  // params: {
  //   folder: 'ecommerce', // Customize the folder where images will be stored
  //   format: async (req, file) => 'jpg', // Customize the image format if needed
  //   public_id: (req, file) => `${file.fieldname}-${Date.now()}`, // Generate a unique public_id
  // },
  folder: "ecommerce", // Customize the folder where images will be stored
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const multerUpload = multer({ storage: storage });

module.exports = multerUpload;
