import express from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const router = express.Router();

import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("CLOUDINARY CONFIG:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "LOADED" : "MISSING",
});



const storage = multer.memoryStorage();
const upload = multer({ storage });

// router.post("/upload", upload.array("images", 10), async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ error: "No files uploaded" });
//     }

//     const urls = [];

//     for (let file of req.files) {
//       const uploaded = await new Promise((resolve, reject) => {
//         cloudinary.uploader.upload_stream(
//           {
//             folder: "products",
//             format: "webp",
//           },
//           (err, result) => {
//             if (err) reject(err);
//             else resolve(result.secure_url);
//           }
//         ).end(file.buffer);
//       });

//       urls.push(uploaded);
//     }

//     res.json({ urls });
//   } catch (err) {
//     console.error("UPLOAD ERROR:", err);
//     res.status(500).json({ error: "Upload failed" });
//   }
// });
router.post("/upload", upload.array("images", 10), async (req, res) => {
  try {
    console.log("FILES RECEIVED:", req.files);

    if (!req.files || req.files.length === 0) {
      console.log("❌ NO FILES FOUND");
      return res.status(400).json({ error: "No files uploaded" });
    }

    const urls = [];

    for (let file of req.files) {
      console.log("UPLOADING FILE:", file.originalname);

      const uploaded = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "products",
            format: "webp",
          },
          (err, result) => {
            if (err) {
              console.log("CLOUDINARY ERROR:", err);
              reject(err);
            } else {
              console.log("CLOUDINARY RESULT:", result.secure_url);
              resolve(result.secure_url);
            }
          }
        ).end(file.buffer);
      });

      urls.push(uploaded);
    }

    console.log("FINAL URLS:", urls);

    res.json({ urls });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});


export default router;
