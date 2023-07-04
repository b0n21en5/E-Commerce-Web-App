import slugify from "slugify";
import productTypeModel from "../models/productModel.js";

export const createProductType = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingType = await productTypeModel.findOne({ name });
    if (existingType) {
      return res.status(200).send({
        success: true,
        message: "Product Type Already Exists",
      });
    }
    const productType = await new productTypeModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New Product Type Created",
      productType,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in Product Type",
    });
  }
};

// update category controller
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while updating",
      error,
    });
  }
};

// get all categories controller
export const categoriesController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res
      .status(200)
      .send({ success: true, message: "All Categories List", category });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while Fetching all Categories",
      error,
    });
  }
};

// single category controller
export const singleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await categoryModel.findOne({ slug: slug });
    res.status(200).send({
      success: true,
      message: "Successfully Get Single Category",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching category",
      error,
    });
  }
};

// delete category controller
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while deleting category",
      error,
    });
  }
};
