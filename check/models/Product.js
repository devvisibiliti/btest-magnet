import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const ReviewSchema = new Schema({
  name: String,
  rating: { type: Number, default: 0 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

const SpecSchema = new Schema({
  key: String,
  value: String,
});

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String, // short desc
    productDescription: String, // ⭐ rich text HTML

    price: { type: Number, required: true },
    discountPrice: Number,
    category: { type: String, required: true },
    images: [String],

    stock: { type: Number, default: 0 },

    rating: { type: Number, default: 0 },
    reviews: [ReviewSchema],

    specs: [SpecSchema],

    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

export default models.Product || model("Product", ProductSchema);
