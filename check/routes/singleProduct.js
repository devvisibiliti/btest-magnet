import express from "express";
import {SingleProductSave, SingleProductGet } from "../controllers/SingleProductController.js";

const router = express.Router();

router.post("/", SingleProductSave);
router.get("/:slug",SingleProductGet )

export default router;