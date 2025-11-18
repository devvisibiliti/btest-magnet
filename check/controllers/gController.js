import G from '../models/gModel.js'

const crBg = async (req, res, next) => {
  try {
    console.log("Uploaded file:", req.file);

    const { title, description } = req.body;
    
    const imageUrl = req.file?.path || req.file?.url;   // ✔ Cloudinary URL
    const imagePublicId = req.file?.filename;           // ✔ Cloudinary public_id

    const gc = await G.create({
      title,
      description,
      imageUrl,
      imagePublicId,
    });

    return res.status(200).json({
      message: "g is ok",
      data: gc,
    });

  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default crBg;
