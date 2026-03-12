import express from "express";
import SingleProductSave from "../controllers/SingleProductController.js";

const router = express.Router();

router.post("/", SingleProductSave);

export default router;