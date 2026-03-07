import express from "express"
import upload from "../storage/multercloudinary.js"

const router = express.Router()

router.post("/uploadimage", upload.single("file"), (req, res) => {

  res.json({
    url: req.file.path
  })

})

export default router