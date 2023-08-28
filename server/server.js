import express from "express";
import colors from "colors";
import compression from "compression";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// configure env
dotenv.config();

//database config
connectDB();

// es-module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest objects
const app = express();

const setCachingHeaders = (req, res, next) => {
  if (req.method === "GET") {
    const cacheTime = 604800;
    const expiryDate = new Date(Date.now() + cacheTime * 1000);

    res.setHeader("Cache-Control", `public,max-age=${cacheTime}`);
    res.setHeader("Expires", expiryDate.toUTCString());
  }
  next();
};

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(setCachingHeaders);

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);

app.use(
  express.static(path.join(__dirname, "./client/build"), { maxAge: 604800 })
);

// rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgCyan.white);
});
