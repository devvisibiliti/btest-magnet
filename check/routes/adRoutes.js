import { Router } from "express";
import VerifyUser from "../middlewares/VerifyUser.js";
import Signup from "../controllers/SignupController.js"
import Lo from "../controllers/LoControllers.js";
// import { verify } from "jsonwebtoken";


const adRouter = Router()

adRouter.post("/signup", Signup)
adRouter.post("/login", Lo)
// adRouter.get("/verify", VerifyUser)
adRouter.get("/verify", VerifyUser, (req, res) => {
  return res.status(200).json({
    message: "verified",
    user: req.user
  });
});



export default adRouter