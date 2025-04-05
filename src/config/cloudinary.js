import cloudinary from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  allowedFormats: ["jpg", "jpeg", "png"],
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  params: {
    folder: "blog-api",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

export default storage;
