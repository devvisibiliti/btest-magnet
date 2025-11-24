import mongoose from 'mongoose';
// import { Schema, models, model } from 'mongoose';
const { Schema, model, models } = mongoose;

const ReviewSchema = new Schema({
  name: String,
  rating: { type: Number, default: 0 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discountPrice: Number,
  category: { type: String, required: true },
  images: [String],
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: [ReviewSchema],
  slug: { type: String, unique: true },
}, { timestamps: true });

export default models.Product || model('Product', ProductSchema);
