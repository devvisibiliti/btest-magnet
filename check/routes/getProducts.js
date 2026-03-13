import express from "express"
import GetProducts from "../controllers/GetProductsController.js"



const router = express.Router()

router.get("/", GetProducts)
export default router;
