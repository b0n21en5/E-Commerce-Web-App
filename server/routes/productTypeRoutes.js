import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { createProductType } from "../controllers/productTypeController.js";

const router = express();

// routes
// create product type route
router.post("/create-type", requireSignIn, isAdmin, createProductType);

// update category route
// router.put(
//   "/update-type/:id",
//   requireSignIn,
//   isAdmin,
//   updateCategoryController
// );

// // getAll category route
// router.get("/all-types", categoriesController);

// // single category by id
// router.get("/single-type/:slug", singleCategoryController);

// // delete category route
// router.delete(
//   "/delete-type/:id",
//   requireSignIn,
//   isAdmin,
//   deleteCategoryController
// );

export default router;
