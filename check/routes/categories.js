import express from "express";
import slugify from "slugify";
import Category from "../models/Category.js";

const router = express.Router();

// CREATE CATEGORY
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const slug = slugify(name, { lower: true });

    const category = await Category.create({ name, slug });

    res.json(category);
  } catch (err) {
    console.error("CATEGORY CREATE ERROR:", err);
    res.status(500).json({ error: "Failed to create category" });
  }
});

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    console.error("CATEGORY FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

export default router;
