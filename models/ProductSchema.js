import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: String,
  price: String,
  rating: String,
  discount: String,
  availablity: String,
});

export default mongoose.model("product", productSchema);
