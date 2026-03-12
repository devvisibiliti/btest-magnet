import express from "express"
import upload from "../middlewares/multer.js"
import imagekit from "../config/imagekit.js"

const router = express.Router()

router.post("/", upload.single("file"), async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" })
    }

    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
      folder: "products"
    })

    res.json({
      url: result.url
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Upload failed"
    })

  }

})

export default router