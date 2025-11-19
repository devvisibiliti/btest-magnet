// routes/gRoutes.js
import { Router } from "express";
import VerifyUser from "../middlewares/VerifyUser.js";
import crBg from "../controllers/gController.js";
import upload from '../middlewares/multer.js';
import { validateCreate } from "../middlewares/validateCreate.js";
import crGe from "../controllers/crGeController.js";
import crGi from "../controllers/crGiController.js";
import validateId from "../middlewares/validateId.js";
import upi from "../controllers/upiController.js";
import del from "../controllers/delController.js";


const router = Router();
// routes/gRoutes.js (only change the /gp route during debug)
router.post(
  "/gp",
  (req, res, next) => {
    console.log("ROUTE HIT: /gp - before VerifyUser");
    next();
  },
  VerifyUser,
  (req, res, next) => {
    console.log("ROUTE: after VerifyUser, before multer");
    next();
  },
  upload.single("image"),
  (req, res, next) => {
    console.log("ROUTE: after multer; req.file:", !!req.file);
    console.log("req.body keys:", Object.keys(req.body));
    next();
  },
  validateCreate,
  crBg
);

router.post("/gp",VerifyUser,validateCreate, crBg);
router.get("/ge", crGe)
router.get("/ge/:id",validateId, crGi)
router.put("/ge/update/:id", upi)
router.delete("/ge/del/:id", del)

export default router;
