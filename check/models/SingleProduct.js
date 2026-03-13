import mongoose from "mongoose"


const SingleProductSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique:true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  mainDescription: { type: String, required: true },
  advantages: [{ type: String, required: true }],
  features: [{ type: String, required: true }],
  options: [{ type: String, required: true }],
  description: { type: String, required: true },
  stock: { type: String, required: true }
});

export default mongoose.model("SingleProductDB", SingleProductSchema)

