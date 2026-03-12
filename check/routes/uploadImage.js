import express from "express"
import upload from "../storage/multercloudinary.js"

const router = express.Router()

router.post("/", upload.single("file"), (req, res) => {

  console.log("REQ FILE:", req.file)

  if (!req.file) {
    return res.status(400).json({
      error: "No file uploaded"
    })
  }

  res.json({
    url: req.file.path
  })
})

export default router