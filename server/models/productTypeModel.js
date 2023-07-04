import mongoose, { Schema } from "mongoose";

const productTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("ProductType", productTypeSchema);
