import SingleProductDB from "../models/SingleProduct.js";

const SingleProductSave = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body)
    const {
  slug,
  imageUrl,
  title,
  altImage,
  mainDescription,
  advantages,
  features,
  options,
  description,
  stock
} = req.body;

   if (
  !slug ||
  !imageUrl||
  !title ||
  !altImage ||
  !mainDescription ||
  !advantages ||
  !features ||
  !options ||
  !description ||
  !stock
) {
  return res.status(400).json({ message: "Give all required fields" });
}

    await SingleProductDB.create({
  slug,
  imageUrl,
  title,
  altImage,
  mainDescription,
  advantages,
  features,
  options,
  description,
  stock
});

    res.status(200).json({ message: "Single Product Created" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default SingleProductSave;