import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

// create product controller
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photos } = req.files;
    // validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case photos && photos.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1mb" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photos) {
      products.photos.data = fs.readFileSync(photos.path);
      products.photos.contentType = photos.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating products",
      error,
    });
  }
};

// get all products controller
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photos")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalCount: products.length,
      message: "All Products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting products",
      error,
    });
  }
};

// single product controller
export const singleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photos")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Fetched Single Product",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Getting Product",
      error,
    });
  }
};

// get photos controller
export const getPhotosController = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.pid)
      .select("photos");
    if (product.photos.data) {
      res.set("Content-type", product.photos.contentType);
      return res.status(200).send(product.photos.data);
    }
  } catch (error) {
    console.log(error);
    res.status(
      (500).send({
        success: false,
        message: "Error while Fetching Photos",
        error,
      })
    );
  }
};

// delete product controller
export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel
      .findByIdAndDelete(req.params.pid)
      .select("-photos");
    res.status(200).send({
      success: true,
      message: "Successfully Deleted Product",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Deleting Product",
      error,
    });
  }
};

// update product controller
export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photos } = req.files;
    // validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case photos && photos.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1mb" });
    }

    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photos) {
      products.photos.data = fs.readFileSync(photos.path);
      products.photos.contentType = photos.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating products",
      error,
    });
  }
};
