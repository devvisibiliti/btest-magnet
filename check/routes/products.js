import express from "express";
import slugify from "slugify";
import Product from "../models/product.js";

const router = express.Router();

// -------------------------------------------------------
// GET ALL PRODUCTS
// -------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// -------------------------------------------------------
// CREATE PRODUCT
// -------------------------------------------------------
router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      productDescription,
      price,
      discountPrice,
      category,
      images = [],
      stock = 1,
      specs = [],   // 👉 get specs from body
    } = req.body;

    const slug = slugify(title, { lower: true });

    const product = await Product.create({
      title,
      description,
      productDescription,
      price,
      discountPrice,
      category,
      images,
      stock,
      specs,   // 👉 save specs too
      slug,
    });

    res.json(product);
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});



// -------------------------------------------------------
// GET PRODUCT BY ID  ← REQUIRED FOR ADMIN VIEW
// -------------------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// -------------------------------------------------------
// UPDATE PRODUCT
// -------------------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    let body = req.body;

    // auto-update slug if title changed
    if (body.title) {
      body.slug = slugify(body.title, { lower: true });
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, body, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
});

// -------------------------------------------------------
// DELETE PRODUCT
// -------------------------------------------------------
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

// -------------------------------------------------------
// GET PRODUCT BY SLUG (Public page) 
// -------------------------------------------------------
// router.get("/slug/:slug", async (req, res) => {
//   try {
//     const product = await Product.findOne({ slug: req.params.slug });

//     if (!product) return res.status(404).json({ error: "Product not found" });

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch product" });
//   }
// });

export default router;
