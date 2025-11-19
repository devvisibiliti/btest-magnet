import G from "../models/gModel.js";

const crBg = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Title and description required" });
    }

    // imageUrl may be empty if the user didn't upload an image
    const post = await G.create({
      title,
      description,
      imageUrl: imageUrl || "",
    });

    return res.status(200).json({
      message: "Post created successfully",
      data: post,
    });
  } catch (err) {
    console.error("Create Post Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

export default crBg;
