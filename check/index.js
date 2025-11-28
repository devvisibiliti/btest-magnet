// // index.js
// import dotenv from "dotenv";
// dotenv.config();
// console.log("CLOUDINARY ENV LOADED:", {
//   NAME: process.env.CLOUDINARY_NAME,
//   KEY: process.env.CLOUDINARY_KEY,
//   SECRET: process.env.CLOUDINARY_SECRET ? "SET" : "MISSING"
// });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// import router from "./routes/gRoutes.js";
// import adRouter from "./routes/adRoutes.js";
// import cookieParser from "cookie-parser";

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// // Simple incoming request logger (place BEFORE routes)
// app.use((req, res, next) => {
//   console.log("INCOMING:", req.method, req.url);
//   next();
// });

// // mount your routers
// app.use("/api", router);
// app.use("/ad", adRouter);

// // Basic health route (helpful to check server)
// app.get("/health", (req, res) => res.json({ ok: true }));

// // 404 handler for unmatched API routes (returns JSON)
// app.use((req, res, next) => {
//   if (req.path.startsWith("/api") || req.path.startsWith("/ad")) {
//     return res.status(404).json({ error: "Not found" });
//   }
//   next();
// });

// // Global error handler (must be AFTER routes)
// app.use((err, req, res, next) => {
//   console.error("GLOBAL ERROR:", err && (err.stack || err));
//   // If headers already sent, delegate to default handler
//   if (res.headersSent) return next(err);
//   res.status(500).json({ error: "Internal server error" });
// });

// const PORT = process.env.PORT || 5300;
// app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log("mongo is connected"))
//   .catch(err => console.error("mongo connect error:", err));



// this is product merge also blog code
import dotenv from "dotenv";
dotenv.config();

// console.log("CLOUDINARY ENV LOADED:", {
//   NAME: process.env.CLOUDINARY_NAME,
//   KEY: process.env.CLOUDINARY_KEY,
//   SECRET: process.env.CLOUDINARY_SECRET ? "SET" : "MISSING"
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";

// EXISTING ROUTES
import router from "./routes/gRoutes.js";
import adRouter from "./routes/adRoutes.js";

// NEW PRODUCT ROUTES
import productsRoutes from "./routes/products.js";
import categoriesRoutes from "./routes/categories.js";
import uploadRoutes from "./routes/upload.js";

const app = express();

// Security middleware
app.use(helmet());

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiter
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

// Request logger
app.use((req, res, next) => {
  console.log("INCOMING:", req.method, req.url);
  next();
});

// EXISTING ROUTES
app.use("/api", router);
app.use("/ad", adRouter);

// NEW PRODUCT ROUTES
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/upload", uploadRoutes);

// Health route
app.get("/health", (req, res) => res.json({ ok: true }));

// 404 handler
app.use((req, res, next) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/ad")) {
    return res.status(404).json({ error: "Not found" });
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err && (err.stack || err));
  if (res.headersSent) return next(err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server + database
const PORT = process.env.PORT || 5300;

app.listen(PORT, () => console.log(`App running on ${PORT}`));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongo is connected"))
  .catch((err) => console.error("mongo connect error:", err));
