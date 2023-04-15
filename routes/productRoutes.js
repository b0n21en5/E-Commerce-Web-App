import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getPhotosController,
  getProductController,
  singleProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// update product route
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get all products route
router.get("/get-products", getProductController);

// single product route
router.get("/get-product/:slug", singleProductController);

// get photos route
router.get("/product-photo/:pid", getPhotosController);

// delete product route
router.delete("/:pid", deleteProductController);

export default router;
