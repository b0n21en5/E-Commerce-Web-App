import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoriesController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express();

// routes
// create category route
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category route
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getAll category route
router.get("/categories", categoriesController);

// single category by id
router.get("/single-category/:slug", singleCategoryController);

// delete category route
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
