import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/gRoutes.js";
import adRouter from "./routes/adRoutes.js";
import cookieParser from "cookie-parser";


const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// app.post("/api/echo", (req, res) => {
//   console.log("Echo body ->", req.body);
//   res.status(201).json({ ok: true, received: req.body });
// });

app.use("/api", router)
app.use("/ad", adRouter)


const PORT = process.env.PORT || 5300;
app.listen(PORT, () => console.log(`App is listen ${PORT}`));



mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mon is connected")
})

// app.use((req, res, next)=>{
//     console.log(`${req.method} ${req.orginalUrl}`)
//     next()
// })




