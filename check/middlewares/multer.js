import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,   // VERY IMPORTANT
  params: {
    folder: "mern-blog",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) =>
      Date.now() + "-" + file.originalname.replace(/\s+/g, "")
  }
});

const upload = multer({ storage });

export default upload;
